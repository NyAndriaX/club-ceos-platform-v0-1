import React from "react";
import { Button } from "primereact/button";
import { MenuOption } from "./MenuOption";
import { NavLink } from "./NavLink";

export function NavBar() {
    return (
        <nav className="relative flex flex-col gap-2 p-4">
            <div className="relative w-full h-12">
                <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <h1 className="text-2xl font-bold text-fuchsia-700">&lt; Logo &gt;</h1>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <Button label="Accessibilité" outlined aria-label="Accessibilité" />
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                <MenuOption />
                <NavLink />
                <Button
                    outlined
                    label="Adhérer"
                    onClick={() => (window.location.href = "/signup")}
                />
            </div>
        </nav>
    );
}
