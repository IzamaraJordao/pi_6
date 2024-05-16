import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {ModalSearchList} from "@/app/components/ModalSearchList";

export default function Film() {

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


    return (
        <>
            <div className="overflow-x-auto flex flex-row mt-8">
                <div className="w-1/2 flex flex-col justify-start items-center">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Nome do Filme</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"/>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Nome do Filme</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"/>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Nome do Filme</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"/>
                    </label>
                </div>
                <div className="w-1/2 flex flex-col justify-start items-center">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Nome do Filme</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"/>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Nome do Filme</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"/>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Nome do Filme</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"/>
                    </label>
                </div>
            </div>
            <div className="flex flex-row justify-center ">
                <button className="btn btn-wide mt-8 bg-orange-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-4 h-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                    </svg>
                    Usuários
                </button>
            </div>
        </>
    )
}