import Script from 'next/script'

export const metadata = {
  title: 'Roshan Sha, Creative Developer',
  description: 'Creative developer specialized in web interfaces, animation and interactive design. Discover my projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
        
        {/* Preload fonts and images */}
        <link rel="preload" href="/assets/fonts/Breton.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/Machine.otf" as="font" type="font/otf" crossOrigin="" />
      </head>
      <body suppressHydrationWarning>
        {children}
        
        {/* Common Scripts */}
                              </body>
    </html>
  )
}
