'use client'
import React, {useState} from "react";

import {useRouter} from 'next/navigation'
import Menu from "@/app/components/menu";
import Carousel from "@/app/components/Carousel";
import Chat from "@/app/components/Chat";

export default function Dashboard() {
    const [initChat, setInitChat] = useState(false);

    function handleChat() {
        const chat = !initChat;
        setInitChat(chat);
    }
    return (
        <div>
            <Menu text="Dashboardddddd"/>
            <div className={"flex flex-row justify-center"}>
                < Carousel/>
            </div>
            <button className="btn btn-primary" onClick={handleChat}
            >Iniciar Indicação</button>
            {initChat && <Chat/>}
        </div>
    )
}