import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://laomaitravel.com'),
  title: {
    default: 'Lao Mai Travel – Your Trusted Local Travel Partner Laos',
    template: '%s | Lao Mai Travel'
  },
  description:
    'Authentic Laos travel experiences crafted by local experts. Day tours, weekend escapes, and grand Laos journeys from Vientiane.',
  keywords: [
    'Laos travel',
    'Vientiane tours',
    'Laos tour packages',
    'local Laos guide',
    'authentic Laos experiences',
    'Luang Prabang tours',
    'Laos adventure tours',
    'Southeast Asia travel',
    'Laos cultural tours',
    'Mekong River tours'
  ],
  authors: [{ name: 'Lao Mai Travel' }],
  creator: 'Lao Mai Travel',
  publisher: 'Lao Mai Travel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['lo_LA'],
    url: 'https://laomaitravel.com',
    siteName: 'Lao Mai Travel',
    title: 'Lao Mai Travel – Your Trusted Local Travel Partner Laos',
    description:
      'Authentic Laos travel experiences crafted by local experts. Day tours, weekend escapes, and grand Laos journeys from Vientiane.',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lao Mai Travel - Discover the Soul of Laos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lao Mai Travel – Your Trusted Local Travel Partner Laos',
    description:
      'Authentic Laos travel experiences crafted by local experts. Day tours, weekend escapes, and grand Laos journeys from Vientiane.',
    images: ['/img/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Lao Mai Travel',
    description: 'Your Trusted Local Travel Partner in Laos - Authentic travel experiences crafted by local experts',
    url: 'https://laomaitravel.com',
    logo: 'https://laomaitravel.com/img/logo.png',
    image: 'https://laomaitravel.com/img/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vientiane',
      addressCountry: 'LA'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Laos'
    }
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600&family=Montserrat:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://laomaitravel.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
