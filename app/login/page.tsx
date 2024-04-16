'use client'
import React, {useState} from "react";
import Image from 'next/image'
import logo_login from '../../public/images/img_login.png'
import logo from '../../public/images/logo.png'
import {useRouter} from 'next/navigation'

export default function Login() {
    const router = useRouter()

    function redirectToDash() {
        router.push('/dashboard')
    }

    function redirectToUser() {
        router.push('/user')
    }

    return (
        <div className="flex items-center justify-center h-screen">

            <div className="flex flex-row bg-base-100 shadow-xl h-full w-full">
                <div className="w-3/4">
                    <Image src={logo_login} alt="Logo" className="h-full w-full"/>
                </div>
                {/*<div className="w-1/4 h-full bg-orange-700">*/}

                {/*</div>*/}

                <div className="w-1/4 h-full flex flex-col p-8 justify-center items-center">
                    <div className="flex flex-col items-center justify-around">
                        <Image src={logo} alt="Logo" className=" max-w-48 max-h-58"/>
                        <div className="w-full mt-8">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                     className="w-4 h-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                                </svg>
                                <input type="text" className="grow" placeholder="Username"/>
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mt-8">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                     className="w-4 h-4 opacity-70">
                                    <path fillRule="evenodd"
                                          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <input type="password" className="input-bordered input-warning" value="password"/>
                            </label>
                            <div className="card-actions justify-end flex flex-row mt-8">
                                <button className="btn btn-primary" onClick={redirectToDash}>Entrar</button>
                                <button className="btn btn-ghost" onClick={redirectToUser}>Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
