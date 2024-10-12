"use client";

import React from "react";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="flex flex-row justify-center items-center w-screen h-screen">
            <div className="flex flex-col gap-2 max-w-4xl items-center justify-center">
                <h4 className="text-base font-bold">
                    Désolé, cette page n&apos;est pas disponible
                </h4>
                <span className="text-xs text-gray-500 w-full text-center">
                    Le lien que vous avez suivi est peut-être rompu ou la page a
                    peut-être été supprimé.
                </span>
                <Button onClick={() => router.push('/')} label="Retour" size="small" text />
            </div>
        </div>
    )
}
