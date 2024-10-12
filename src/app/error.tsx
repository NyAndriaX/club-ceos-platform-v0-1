"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";

export default function Error() {
    const router = useRouter()

    return (
        <div className="flex flex-row justify-center items-center w-screen h-screen">
            <div className="flex flex-col gap-2 max-w-4xl items-center justify-center">
                <h4 className="text-base font-bold">
                    Désolé, quelque chose s&apos;est mal passé !
                </h4>
                <span className="text-xs text-gray-500 w-full text-center">
                    Le lien que vous avez suivi est peut-être rompu ou la page a
                    peut-être été supprimé.
                </span>
                <Button onClick={() => router.push('/')} label="Retour" size="small" text />
            </div>
        </div>
    );
}
