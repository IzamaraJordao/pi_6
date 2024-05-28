import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'


export default function Tabela() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then()
    }, [])
    async function getUsers() {
        const response = await fetch('http://localhost:3000/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        })
        const data = await response.json()
        setUsers(data)
    }
    function deleteUser(id: number) {
        fetch(process.env.NEXT_PUBLIC_API_URL + '/users/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(() => {
            getUsers().then()
        })
    }

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user: any, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>
                                        <div className="flex flex-row justify-center items-center ">
                                            <PencilIcon className="h-6 w-6 text-blue-500 cursor-pointer mr-4"
                                                        onClick={() => deleteUser(user.id)}
                                            />
                                            <TrashIcon className="h-6 w-6 text-red-500 cursor-pointer"

                                            />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}