import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'



export const metadata: Metadata = {
  title: 'Waste Management App',
  description: 'Waste management website that tells user how to categorise the waste and dispose it.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navigation />
        {children}
      </body>
    </html>
  )
}
