'use client'
import React, {useState} from "react";
import Image from 'next/image'
import logo_login from '../public/images/img_login.png'
import logo from '../public/images/img.png'
import {useRouter} from 'next/navigation'
import Swal from "sweetalert2";

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const redirectToDash = async () => {
        if(email === '' || password === '') {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Preencha todos os campos!',
            });
            return
        }

        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        })

        if (response.status === 201) {
            response.json().then(data => {
                if (data === false) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email ou Senha Incorretos!',
                    });
                } else {
                    if (data.isAdmin === false) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Você não tem permissão para acessar!',
                        });
                    } else {
                        router.push('/home')
                    }
                }

            })
        } else {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Erro de Conecção!',
            });
        }
    }


    return (
        <div className="flex items-center justify-center h-screen">

            <div className="flex flex-row bg-base-100 shadow-xl h-full w-full">
                <div className="w-3/5">
                    <Image src={logo_login} alt="Logo" className="h-full w-full"/>
                </div>
                {/*<div className="w-1/4 h-full bg-orange-700">*/}

                {/*</div>*/}

                <div className="w-2/5 h-full flex flex-col p-8 justify-center items-center">
                    <div className="flex flex-col items-center justify-around">
                        <Image src={logo} alt="Logo" className="max-w-96 max-h-64"/>
                        <div className="w-full mt-8 max-w-72 max-h-58">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                     className="w-4 h-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                                </svg>
                                <input type="text"
                                       className="grow"
                                       placeholder="Email"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                     className="w-4 h-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                                </svg>
                                <input type="password"
                                       className="grow"
                                       placeholder="Senha"
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>

                            <div className="card-actions justify-end flex flex-row mt-8">
                                <button className="btn btn-primary bg-yellow-400 w-72 hover:bg-yellow-600"
                                        onClick={redirectToDash}>Entrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
