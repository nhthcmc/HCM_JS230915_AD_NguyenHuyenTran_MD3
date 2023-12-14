import React from 'react'
import { userAction } from '../../store/slices/user.slice';
import api from '../../services/apis/index';
import { useDispatch } from 'react-redux';

export default function UserCreateForm() {
    const dispatch = useDispatch()

    async function handleAddUser(e) {
        e.preventDefault();
        try {
            let newUser = {
                name: e.target.name.value,
                des: e.target.des.value,
            }
            let result = await api.user.create(newUser)
            dispatch(userAction.create(result.data.data))
            e.target.name.value = ""
            e.target.des.value = ""
        } catch (err) {
            alert("Error")
        }
    }
    return (
        <>
            <form onSubmit={(e) => {
                handleAddUser(e)
            }}>
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
                    name='create'
                >Create</button>
            </form>
        </>
    )
}
