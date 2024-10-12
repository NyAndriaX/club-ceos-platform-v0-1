"use client";

import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";

export default function RootLoading() {
    return (
        <div className="flex flex-row items-center justify-center w-screen h-screen">
            <ProgressSpinner
                style={{ width: "30px", height: "30px" }}
                strokeWidth="8"
                fill="var(--surface-ground)"
                animationDuration=".5s"
            />
        </div>
    );
}
