import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cảnh Báo Lừa Đảo | Lê Hồng Ngọc Lợi',
  description: 'Trang web cảnh báo cộng đồng về các đối tượng lừa đảo. Cập nhật thông tin mới nhất về các chiêu trò lừa đảo phổ biến.',
  keywords: ['cảnh báo lừa đảo', 'lừa đảo trực tuyến', 'phòng chống lừa đảo', 'thông tin kẻ lừa đảo', 'scam warning', 'chống lừa đảo'],
  authors: [{ name: 'Cộng Đồng Phòng Chống Lừa Đảo' }],
  openGraph: {
    title: 'Cảnh Báo Lừa Đảo | Lê Hồng Ngọc Lợi',
    description: 'Chia sẻ và cập nhật thông tin về các đối tượng Lê Hồng Ngọc Lợi lừa đảo để cảnh báo cộng đồng',
    url: 'https://le-hong-ngoc-loi-lua-dao.vercel.app',
    siteName: 'Cảnh Báo Lừa Đảo',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: '/images/facebook-profile-screenshot.png',
        width: 1200,
        height: 630,
        alt: 'Cảnh Báo Lừa Đảo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cảnh Báo Lừa Đảo | Lê Hồng Ngọc Lợi',
    description: 'Chia sẻ thông tin để cảnh báo cộng đồng về các đối tượng lừa đảo Lê Hồng Ngọc Lợi',
    images: ['/images/facebook-profile-screenshot.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#dc2626',
  manifest: '/site.webmanifest',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
