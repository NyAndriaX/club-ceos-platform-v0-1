'use client';

import React, { useRef } from 'react';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

const AuthPage = () => {
    const toast = useRef<Toast>(null);

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-screen">
                <Card
                    header={
                        <div className="p-4 border-b border-gray-300">
                            <h1 className="text-2xl text-center font-bold text-fuchsia-700">
                                &lt; Logo. &gt;
                            </h1>
                        </div>
                    }
                    className="w-full max-w-xl shadow-xl border-round"
                >
                    <form className="flex flex-col gap-4">
                        <InputText
                            placeholder="Adresse e-mail"
                            required
                            className="p-inputtext-sm"
                        />
                        <Password
                            placeholder="Mot de passe"
                            required
                            toggleMask
                            className="p-inputtext-sm"
                        />
                        <Button
                            label="Se connecter"
                            type="submit"
                            className="p-button-sm"
                        />
                    </form>
                    <div className="flex justify-between mt-4">
                        <a
                            href="/forgot-password"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Mot de passe oublié ?
                        </a>
                        <a
                            href="/signup"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Faire une adhésion en tant que membre
                        </a>
                    </div>
                </Card>
            </div>
            <Toast ref={toast} />
        </>
    );
};

export default AuthPage;
