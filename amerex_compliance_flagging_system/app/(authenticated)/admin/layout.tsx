import React from "react";
import Footer from "@/components/footer"
import TopbarWithMenuAdmin from "@/components/topbar-with-menu-admin";

export default function AdminLayout({children,}: { children: React.ReactNode }) {
    return (
        <>
            <TopbarWithMenuAdmin>
                <main className={"grow"}>
                    {children}
                </main>
                <Footer/>
            </TopbarWithMenuAdmin>
        </>
    )
}