import './globals.css'
import { Inter } from 'next/font/google'
import Providers from "./Providers";



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="container mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
