// @flow
import React, { useEffect, useState} from "react";


type TotalGeral = {
    newUsersThisMonth: number,
    totalUsers: number,
    distinctUsersAccessedPlatform: number,
    totalMovies: number
}

export function CardHome() {
    const [totalGeral, setTotalGeral] = useState<TotalGeral | null>(null)

    useEffect(() => {
        getTotalGeral().then()

    }, [])

    const getTotalGeral = async () => {
        const response = await fetch('http://20.83.150.110:3000/dashboard/stats', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        setTotalGeral(data)
    }

    return (
        <div className="flex flex-row justify-around w-full">
            <div
                className="card w-52 h-40  bg-neutral-800  text-primary-content flex flex-col justify-center items-center">
                <div className="card-body flex flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-8 h-8 opacity-70 text-yellow-400">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                    </svg>
                    <p className="text-white">Novos usuários</p>
                    <p className="text-white">no mês atual</p>
                    <h3 className="card-title text-yellow-400">{totalGeral?.newUsersThisMonth}</h3>
                </div>
            </div>
            <div
                className="card w-52 h-40  bg-neutral-800 text-primary-content flex flex-col justify-center items-center">
                <div className="card-body flex flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-8 h-8 opacity-70 text-yellow-400">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                    </svg>
                    <p className="text-white">Acessos este mês</p>
                    <p className="text-white">na plataforma</p>
                    <h3 className="card-title text-yellow-400">{totalGeral?.distinctUsersAccessedPlatform}</h3>
                </div>
            </div>
            <div
                className="card w-52 h-40  bg-neutral-800  text-primary-content flex flex-col justify-center items-center">
                <div className="card-body flex flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-8 h-8 opacity-70 text-yellow-400">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                    </svg>
                    <p className="text-white">Total de usuários</p>
                    <p className="text-white">cadastrados</p>
                    <h3 className="card-title text-yellow-400">{totalGeral?.totalUsers}</h3>
                </div>
            </div>
            <div
                className="card w-52 h-40  bg-neutral-800  text-primary-content flex flex-col justify-center items-center">
                <div className="card-body flex flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-8 h-8 opacity-70 text-yellow-400">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                    </svg>
                    <p className="text-white">Total de filmes</p>
                    <p className="text-white">cadastrados</p>
                    <h3 className="card-title text-yellow-400">{totalGeral?.totalMovies}</h3>
                </div>
            </div>
        </div>
    );
};