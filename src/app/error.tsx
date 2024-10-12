"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";

export default function Error() {
    const router = useRouter()

    return (
        <div className="flex flex-col justify-between h-[80vh] ">
            <div className="">
                <h4 className="text-base font-bold tracking-normal">
                    Désolé, quelque chose s&apos;est mal passé !
                </h4>
                <Button onClick={() => router.push('/')} label='Retour' outlined size="small" />
            </div>
        </div>
    );
}
