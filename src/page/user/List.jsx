import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import UserCreateForm from './UserCreateForm'
import UserUpdateForm from './UserUpdateForm'
import { userAction } from '../../store/slices/user.slice';
import { Modal,Button } from 'antd';
import api from '../../services/apis/index';

export default function List({ setShowUpdateForm, showUpdateForm, setId }) {
    const dispatch = useDispatch()
    const userStore = useSelector(store => store.userStore);
    // const [id, setId] = useState(null)
    // const [sortAsc, setSortAsc] = useState(true)
    // const handleSortById = () => {
    //     setSortAsc(!sortAsc);
    //     const sortedData = userStore.data.slice().sort((a, b) => {
    //         return sortAsc ? a.id - b.id : b.id - a.id;
    //     });
    //     dispatch(userAction.setData(sortedData))
    // }
    async function handleDeleteUser(userId) {
        try {
            await api.user.delete(userId)
            Modal.confirm({
                title: 'Confirm',
                content: 'Delete this student?',
                onOk: () => {
                    dispatch(userAction.delete(userId))

                }
            })
        } catch (err) {
            alert("Error")
        }
    }

    // const columns = [
    //     {
    //         title: 'Id',
    //         dataIndex: 'id',
    //         sorter: {
    //             compare: (a, b) => a.id - b.id,
    //         },
    //     },
    //     {
    //         title: 'Name',
    //         dataIndex: 'name',
    //     },
    //     {
    //         title: 'Description',
    //         dataIndex: 'des'
    //     },
    //     {
    //         title: 'Actions',
    //         colSpan: 2,
    //         dataIndex: 'action'
    //     },
    // ];

    return (
        < div >
            {/* {
                userStore.addModal && <UserCreateForm dispatch={dispatch} />
            } */}
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                {
                    userStore.data?.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.des}</td>
                                <td>
                                    <Button
                                        type='primary'
                                        onClick={() => {
                                            setId(item.id);
                                            setShowUpdateForm(!showUpdateForm);
                                        }}>
                                        Update
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        type="primary" danger
                                        onClick={() => {
                                            handleDeleteUser(item.id)
                                        }}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div >
    )
}
