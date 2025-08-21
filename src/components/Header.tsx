
'use client'

import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { useRef, useEffect } from 'react'

const Header = () => {
  const { totalItems, setCartIconPosition } = useCart()
  const cartIconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cartIconRef.current) {
      const rect = cartIconRef.current.getBoundingClientRect()
      setCartIconPosition({ top: rect.top, left: rect.left })
    }
  }, [setCartIconPosition])

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-display text-2xl font-bold">
          ANCIENT GOD
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/closet" className="hover:text-gold transition-colors">
            The Closet
          </Link>
          <Link href="/about" className="hover:text-gold transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-gold transition-colors">
            Contact
          </Link>
        </nav>
        <div>
          <Link href="/cart">
            <div ref={cartIconRef} className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-cta text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
