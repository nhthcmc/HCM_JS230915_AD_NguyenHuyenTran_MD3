import React, { useEffect } from 'react'
import RouteIndex from './routes/RouteIndex'
import api from './services/apis/index'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from './store/slices/user.slice'

export default function App() {
  const dispatch = useDispatch();
  const userStore = useSelector(store => store.userStore)
  useEffect(() => {
    const fetch = async () => {
      let result = await api.user.findAll();
      console.log(result);
      dispatch(userAction.setData(result?.data.data))
    }
    fetch();
  }, [])

  return (
    <RouteIndex />
  )
}
