import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import AppLayout from './app-layout';
import './globals.css';
import Script from 'next/script';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | KurlClub - Gym Management Software',
    default:
      'KurlClub - Gym Management Software | Fitness Studio Management Platform',
  },
  description:
    'KurlClub is the leading gym management software in India & GCC. Manage members, attendance, payments & trainers for gyms, yoga studios, dance classes & martial arts. Book a demo today!',

  applicationName: 'KurlClub',
  authors: [{ name: 'KurlClub' }],
  creator: 'KurlClub',
  publisher: 'KurlClub',
  metadataBase: new URL('https://kurlclub.com'),
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'KurlClub - Gym Management Software | Fitness Studio Management Platform',
    description:
      'Leading gym management software for India & GCC. Manage members, attendance, payments & trainers. Perfect for gyms, yoga studios, dance classes & martial arts.',
    url: 'https://kurlclub.com',
    siteName: 'KurlClub',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KurlClub - Gym Management Software',
    description:
      'Leading gym management software for India & GCC. Book a demo today!',
  },
  appleWebApp: {
    title: 'KurlClub',
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: ['/favicon.png'],
    apple: ['/apple-favicon.png'],
  },
  manifest: '/manifest.json',
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

  category: 'business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <meta name="theme-color" content="#D3F702" />
        <meta name="format-detection" content="telephone=no" />

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-NKR6LT05KK"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-NKR6LT05KK');
  `}
</Script>
      <Script
        src="https://darkvisitors.com/tracker.js?project_key=fcf9a74b-57ed-4556-9e33-eb41d35d319c"
        strategy="afterInteractive"
        async
      />
<Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5J4836WX');
            `,
          }}
        />
      </head>
      <body className={figtree.variable}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
