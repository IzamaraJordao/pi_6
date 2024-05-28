import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import ModalFilme from "@/app/components/modalFilme";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'


export default function TabelaFilmes() {
    const router = useRouter()
    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        console.log(data)
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

    function editMovie(movie: any) {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
        setSelectedMovie(null);
        getUsers(); // Refresh the list after closing the modal
    }

    function deleteMovie(id: number) {
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
            <div className="overflow-x-auto max-w-full max-h-full">
                <table className="table w-full">
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
                                        <div className="flex flex-row justify-center items-center ">
                                            <PencilIcon className="h-6 w-6 text-blue-500 cursor-pointer mr-4"
                                                        onClick={() => editMovie(movie)}
                                            />
                                            <TrashIcon className="h-6 w-6 text-red-500 cursor-pointer"
                                                         onClick={() => deleteMovie(movie.id)}
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
            {isModalOpen && <ModalFilme movie={selectedMovie} onClose={closeModal} />}
        </>
    )
}