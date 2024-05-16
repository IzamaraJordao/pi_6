'use client'
import React, {useEffect, useState} from "react";
import {useRouter} from 'next/navigation'
import Image from 'next/image'
import logo from '../../public/images/indica.jpg'
import Tabela from "@/app/components/Tabela";
import Film from "@/app/components/Film";


export default function Home() {
    const router = useRouter()
    const [name, setName] = useState('')
    const [users, setUsers] = useState(true)
    const [film, setFilm] = useState(false)

    function onFilm() {
        setFilm(true)
        setUsers(false)
    }

    function onUsers() {
        setFilm(false)
        setUsers(true)
    }

    return (
        <div className="flex flex-col  h-lvh w-full">
            <div className="bg-orange-700 h-1/3 w-full flex items-center justify-around">
                <div className="card w-60 h-40  bg-primary text-primary-content flex flex-col justify-center items-center">
                    <div className="card-body flex flex-col justify-center items-center">
                        <h3 className="card-title">Card title!</h3>
                        <p>Novos usuários</p>
                        <p>no mês atual</p>
                        <h3 className="card-title">35</h3>
                    </div>
                </div>
                <div className="card w-60 h-40  bg-primary text-primary-content flex flex-col justify-center items-center">
                    <div className="card-body flex flex-col justify-center items-center">
                        <h3 className="card-title">Card title!</h3>
                        <p>Novos usuários</p>
                        <p>no mês atual</p>
                        <h3 className="card-title">35</h3>
                    </div>
                </div>
                <div className="card w-60 h-40  bg-primary text-primary-content flex flex-col justify-center items-center">
                    <div className="card-body flex flex-col justify-center items-center">
                        <h3 className="card-title">Card title!</h3>
                        <p>Novos usuários</p>
                        <p>no mês atual</p>
                        <h3 className="card-title">35</h3>
                    </div>
                </div>
                <div className="card w-60 h-40  bg-primary text-primary-content flex flex-col justify-center items-center">
                    <div className="card-body flex flex-col justify-center items-center">
                        <h3 className="card-title">Card title!</h3>
                        <p>Novos usuários</p>
                        <p>no mês atual</p>
                        <h3 className="card-title">35</h3>
                    </div>
                </div>
            </div>
            <div className="bg-gray-700 h-2/3 w-full flex flex-row justify-around items-center">
                <div className="w-1/5 h-5/6 bg-gray-800  rounded-2xl flex flex-col justify-start items-center">
                    <button className="btn btn-wide mt-8" onClick={onUsers}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             className="w-4 h-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                        </svg>
                        Usuários
                    </button>

                    <button className="btn btn-wide mt-8" onClick={onFilm}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             className="w-4 h-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                        </svg>
                        Filmes
                    </button>

                    <button className="btn btn-wide mt-8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             className="w-4 h-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                        </svg>
                        Configurações
                    </button>
                </div>
                <div className="w-3/5 h-5/6 bg-gray-800  rounded-2xl">
                    {users && (<Tabela />)}
                    {film && (<Film />)}
                </div>
            </div>
        </div>
    )
}