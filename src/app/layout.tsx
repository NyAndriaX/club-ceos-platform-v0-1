import React from 'react';
import './styles/globals.css';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";

export default async function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>
                <PrimeReactProvider>{children}</PrimeReactProvider>
            </body>
        </html>
    )
}