import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {ModalSearchList} from "@/app/components/ModalSearchList";

export default function Tabela() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then()
    }, [])
    async function getUsers() {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        })
        const data = await response.json()
        console.log(data)
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
                                        <button className="btn btn-sm btn-primary mr-4">Editar</button>
                                        <button className="btn btn-sm btn-error" onClick={() => deleteUser(user.id)}
                                        >Excluir
                                        </button>
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