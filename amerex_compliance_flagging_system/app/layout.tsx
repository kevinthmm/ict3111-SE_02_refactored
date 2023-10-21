import React from "react";
import type { Metadata } from 'next'
import '@/globals.css';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import theme from './theme/themeConfig';
import {ConfigProvider} from "antd";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: 'Amerex Compliance Flagging System',
  description: 'Created by SIT-ICT ITP Team 2, Refactored by @kevinthmm',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <ConfigProvider theme={theme}>
        <html lang="en">
            <body className={"flex min-h-screen flex-col items-center justify-between"}>
                <StyledComponentsRegistry>
                    {children}
                    <Footer/>
                </StyledComponentsRegistry>
            </body>
        </html>
    </ConfigProvider>
  )
}
