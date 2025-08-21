import type { Metadata } from 'next'
import { Inter, Cinzel } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'
import CartAnimation from '@/components/CartAnimation'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
})

export const metadata: Metadata = {
  title: 'Ancient God',
  description: 'Divinity is Overrated. Ascend.',
}

export default function RootLayout({ children }: { children: React.Node }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} font-sans`}>
        <CartProvider>
          <CartAnimation />
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
