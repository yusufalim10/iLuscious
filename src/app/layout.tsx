"use client"
import './globals.css'
import Providers from './provider'
import { SessionProvider } from 'next-auth/react'

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode,
  session: any
}) {

  return (
    <html lang="en">
      <head />
        <body>
            <Providers>
              <SessionProvider session={session}>
                {children}
              </SessionProvider>
            </Providers>
        </body>
      
    </html>
  )
}
