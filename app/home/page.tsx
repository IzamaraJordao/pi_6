'use client'
import React, { useState, useCallback} from "react";
import {useRouter} from 'next/navigation'
import Tabela from "@/app/components/Tabela";
import Header from "@/app/components/header";
import ModalFilme from "@/app/components/modalFilme";
import TabelaFilmes from "@/app/components/TabelaFilmes";
import {CardHome} from "@/app/components/cardHome";


export default function Home() {
    const router = useRouter()
    const [name, setName] = useState('')
    const [users, setUsers] = useState(true)
    const [film, setFilm] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);
    const [update, setUpdate] = useState<boolean>(false);

    function onFilm() {
        setFilm(true)
        setUsers(false)
    }

    function onUsers() {
        setFilm(false)
        setUsers(true)
    }

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);

    };

    const handleUpdate = useCallback(() => {
        setUpdate(true);
    }, []);

    return (
        <div className="flex flex-col h-lvh w-full bg-neutral-700">
            <Header/>
            <div className=" bg-neutral-700 mt-4 h-1/3 w-full flex items-center justify-around">
               <CardHome/>
            </div>
            <div className="flex flex-row justify-end items-end  bg-neutral-700 w-full">
                {film &&
                    <button className="btn mr-20 bg-yellow-400 text-black mt-4 hover:bg-black hover:text-yellow-400"
                            onClick={openModal}>Adicionar Filme</button>}
            </div>
            <div className=" bg-neutral-700 h-2/3 w-full flex flex-row justify-around items-center">

                <div className="w-1/5 h-5/6 bg-neutral-800   rounded-2xl flex flex-col justify-start items-center">
                    <button className="btn bg-neutral-800  mt-8 w-4/5" onClick={onUsers}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             className="w-4 h-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                        </svg>
                        Usuários
                    </button>

                    <button className="btn bg-neutral-800  mt-8 w-4/5" onClick={onFilm}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             className="w-4 h-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                        </svg>
                        Filmes
                    </button>

                    <button className="btn bg-neutral-800  mt-8 w-4/5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             className="w-4 h-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                        </svg>
                        Configurações
                    </button>
                </div>
                <div className="w-3/5 h-5/6 bg-neutral-800   rounded-2xl overflow-hidden p-2">
                    {users && (<Tabela/>)}
                    {film && (<TabelaFilmes update={update} setUpdate={setUpdate} />)}
                </div>
            </div>
            {
                modalOpen && (<ModalFilme onClose={closeModal} onSave={handleUpdate}  movie={null}/>)
            }

        </div>
    )
}