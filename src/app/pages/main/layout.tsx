import React from "react";
import MainLayout from "@/app/layouts/MainLayout/MainLayout";

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return <MainLayout>{children}</MainLayout>;
};

export default Layout;
