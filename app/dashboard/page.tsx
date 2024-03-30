'use client'
import React, {useState} from "react";

import { useRouter } from 'next/navigation'
import Menu from "@/app/components/menu";
import Carousel from "@/app/components/Carousel";
export default function Dashboard() {



    return (
        <div>
            <Menu text="Dashboardddddd" />
            <div className={"flex flex-row justify-center"}>
            < Carousel />
            </div>
        </div>
    )
}