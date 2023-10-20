import React from "react";
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amerex Compliance Flagging System',
  description: 'Created by SIT-ICT ITP Team 2, Refactored by @kevinthmm',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
