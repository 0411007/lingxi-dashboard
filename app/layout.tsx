import type { Metadata, Viewport } from "next"
import { Inter, Noto_Sans_SC } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sc",
})

export const metadata: Metadata = {
  title: "灵犀导购助理 | Lingxi AI Shopping Assistant",
  description: "您的专属AI购物助手，智能推荐，贴心服务",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#7C8CFF",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${notoSansSC.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
