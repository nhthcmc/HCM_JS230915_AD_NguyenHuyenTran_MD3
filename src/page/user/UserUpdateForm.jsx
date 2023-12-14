import React from 'react'
import { userAction } from '../../store/slices/user.slice';
import api from '../../services/apis/index';
import { useDispatch, useSelector } from 'react-redux';

export default function UserUpdateForm(id) {
    const dispatch = useDispatch()
    let userStore = useSelector(store => store.userStore)
    let user = userStore.data.find(s => s.id == id)
    async function handleUpdateUser(e) {
        e.preventDefault();
        try {
            let newUser = {
                name: e.target.name.value,
                des: e.target.des.value,
            }
            let result = await api.user.update(id, newUser)
            dispatch(userAction.update(result.data.data))
            e.target.name.value = ""
            e.target.des.value = ""
        } catch (err) {
            alert("Error")
        }
    }
    return (
        <>
            <form
                onSubmit={(e) => {
                    handleUpdateUser(e)
                }}>
                <caption>Update student</caption>
                <label>
                    <span>Name</span>
                    <input type='text' name='name'></input>
                </label>
                <label>
                    <span>Description</span>
                    <input type='text' name='des'></input>
                </label>
                <button
                    type='submit'
                    name='update'
                >Update</button>
            </form >
        </>
    )
}
