import React from "react";

export default function AdminLayout({children,}: { children: React.ReactNode }) {
    return (
        <main className={"w-screen grow flex flex-col items-center justify-center"}>
            <p>This is a User Layout</p>
            {children}
        </main>
    )
}