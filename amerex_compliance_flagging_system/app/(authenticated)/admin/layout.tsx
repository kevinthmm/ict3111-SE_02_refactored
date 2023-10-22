import React from "react";
import Footer from "@/components/footer"
import TopBarWithMenu from "@/components/topbar-with-menu";

export default function AdminLayout({children,}: { children: React.ReactNode }) {
    return (
        <>
            <TopBarWithMenu>
                <main className={"grow"}>
                    {children}
                </main>
                <Footer/>
            </TopBarWithMenu>
        </>
    )
}