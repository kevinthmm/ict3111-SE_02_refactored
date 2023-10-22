import React from "react";
import Footer from "@/components/footer"
import TopbarWithMenuUser from "@/components/topbar-with-menu-user";

export default function AdminLayout({children,}: { children: React.ReactNode }) {
    return (
        <>
            <TopbarWithMenuUser>
                <main className={"grow"}>
                    {children}
                </main>
                <Footer/>
            </TopbarWithMenuUser>
        </>
    )
}