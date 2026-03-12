import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lao Mai Travel – Your Trusted Local Travel Partner Laos',
  description:
    'Authentic Laos travel experiences crafted by local experts. Day tours, weekend escapes, and grand Laos journeys from Vientiane.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
