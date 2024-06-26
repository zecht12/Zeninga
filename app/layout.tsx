import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zeninga',
  description: 'Generated by Zecht',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}