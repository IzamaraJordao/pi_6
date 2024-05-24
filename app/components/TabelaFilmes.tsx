import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {ModalSearchList} from "@/app/components/ModalSearchList";

export default function TabelaFilmes() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getUsers().then()
    }, [])
    async function getUsers() {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/movies/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        })
        const data = await response.json()
        setMovies(data)
    }
    function deleteUser(id: number) {
        fetch(process.env.NEXT_PUBLIC_API_URL + '/movies/' + id, {
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
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Data de Lançamento</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        movies.map((movie: any, index) => {
                            const releaseDate = new Date(movie.releaseDate);
                            const formattedDate = releaseDate.toLocaleDateString('pt-BR');
                            return (
                                <tr key={index}>
                                    <td>{movie.id}</td>
                                    <td>{movie.title}</td>
                                    <td>{formattedDate}</td>
                                    <td>{movie.overview}</td>
                                    <td>
                                        <button className="btn btn-sm btn-primary mr-4">Editar</button>
                                        <button className="btn btn-sm btn-error" onClick={() => deleteUser(movie.id)}
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