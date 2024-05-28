'use client'
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {ModalSearchList} from "@/app/components/ModalSearchList";
import Image from "next/image";
import logo from "@/public/images/img.png";


export default function Header() {
    const router = useRouter()

    function redirectToLogin() {
        router.push('/')
    }
    return (
        <div className="flex flex-row justify-between items-center bg-black w-full  p-4">
            <Image src={logo} alt="Logo" className="max-w-60 h-10" />
            <div className="flex flex-row items-center gap-4 cursor-pointer"
                onClick={redirectToLogin}>
                <p className="text-lg text-white">Sair</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                     className="w-4 h-4 opacity-70">
                    <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                </svg>
            </div>

        </div>
    )
}