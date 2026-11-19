
import type { Metadata, Viewport } from 'next'
import { Nunito, Quicksand, Space_Grotesk } from 'next/font/google'
import { profile, siteUrl } from '@/data/content'
import { assetUrl } from '@/lib/assetUrl'
import './globals.css'
import './sections.css'

const displayFont = Quicksand({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display-family',
  display: 'swap',
})

const bodyFont = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body-family',
  display: 'swap',
})

const nameFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-name',
  display: 'swap',
})

/**
 * Applies the visitor's saved theme before first paint to avoid a flash.
 * Dark is the default until they pick otherwise.
 */
const themeScript = `
(function(){try{
document.documentElement.dataset.theme=localStorage.getItem('theme')==='light'?'light':'dark';
}catch(e){document.documentElement.dataset.theme='dark';}})();
`

const title = `${profile.fullName} — Electronics Hardware Engineer`

const description =
  'Portfolio of Pramidu Saumyajith — Electronics Hardware Engineer and M.Sc. Photonics student at Friedrich Schiller University Jena, Germany.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.fullName, url: siteUrl }],
  creator: profile.fullName,
  keywords: [
    'Pramidu Saumyajith',
    'Electronics Hardware Engineer',
    'Photonics',
    'PCB Design',
    'RF Electronics',
    'Embedded Systems',
    'Robotics',
    'University of Moratuwa',
    'Abbe School of Photonics',
    'Friedrich Schiller University Jena',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: siteUrl,
    siteName: `${profile.fullName} — Portfolio`,
    title,
    description,
    firstName: profile.firstName,
    lastName: profile.lastName,
    images: [
      {
        url: `${siteUrl}/user.webp`,
        alt: profile.fullName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${siteUrl}/user.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: { icon: assetUrl('logo.png') },
}

export const viewport: Viewport = {
  themeColor: '#080b09',
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.fullName,
  alternateName: [profile.name, 'Pramidu Saumyajith'],
  url: siteUrl,
  image: `${siteUrl}/user.webp`,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  jobTitle: 'Electronics Hardware Engineer',
  description: profile.about,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jena',
    addressCountry: 'DE',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'University of Moratuwa',
      sameAs: 'https://uom.lk/',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Friedrich Schiller University Jena',
      sameAs: 'https://www.uni-jena.de/',
    },
  ],
  knowsAbout: [
    'Electronics Hardware Design',
    'PCB Design',
    'RF Electronics',
    'Mixed-Signal Electronics',
    'Photonics',
    'Embedded Systems',
    'Robotics',
    'GNSS',
    'Hardware Testing and Validation',
  ],
  sameAs: profile.socials.map((social) => social.href),
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${displayFont.variable} ${bodyFont.variable} ${nameFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
