import React, { useState } from 'react'
import './page.scss'
import List from './user/List'
import UserCreateForm from './user/UserCreateForm'
import UserUpdateForm from './user/UserUpdateForm'
import { Button } from 'antd'

export default function Page() {
  const [showCreateFrom, setShowCreateFrom] = useState(false)
  const [showUpdateFrom, setShowUpdateFrom] = useState(false)
  const [id, setId] = useState(null)

  return (
    <>
      <Button
        type="primary"
        style={{ background: "green", color: "white" }}
        onClick={() => {
          setShowCreateFrom(!showCreateFrom)
        }}>Create Student</Button>
      {showCreateFrom && <UserCreateForm />}
      {showUpdateFrom && <UserUpdateForm id={id} />}
      <div className='studentList'>Student List</div>
      <List setShowUpdateFrom={setShowUpdateFrom} showUpdateFrom={showUpdateFrom} setId={setId} />
    </>
  )
}