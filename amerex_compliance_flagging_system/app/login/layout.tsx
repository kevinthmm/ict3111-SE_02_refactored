import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";

export default function LoginLayout({children,}: { children: React.ReactNode }) {
    return (
        <main className={"w-screen grow flex flex-col items-center justify-center"}>
            <div className={"max-w-2xl"}>
                <Image className={"max-w-full h-auto aspect-[5/2]"} src={"../logoAmerexBlue.svg"} alt={"Test"} width={1080} height={240}/>
            </div>
            {children}
            <Footer/>
        </main>
    )
}