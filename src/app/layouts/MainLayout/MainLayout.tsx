'use client';

import React from "react"
import { NavBar } from "@/app/components/layout/MainLayout/Navbar"

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <main className="xl:mx-auto min-h-screen w-full">
            <div className="flex flex-col">
                <NavBar />
                <div className="w-full">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default MainLayout