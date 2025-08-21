
'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Product } from '@/lib/products'

interface CartItem extends Product {
  quantity: number
}

interface Rect {
  top: number
  left: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (product: Product, startRect?: Rect) => void
  removeFromCart: (productId: string) => void
  totalItems: number
  animatingProductImage: { src: string; rect?: Rect } | null
  setAnimatingProductImage: (image: { src: string; rect?: Rect } | null) => void
  cartIconPosition: Rect | null
  setCartIconPosition: (position: Rect | null) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [animatingProductImage, setAnimatingProductImage] = useState<{ src: string; rect?: Rect } | null>(null)
  const [cartIconPosition, setCartIconPosition] = useState<Rect | null>(null)

  const addToCart = (product: Product, startRect?: Rect) => {
    if (product.image) {
      setAnimatingProductImage({ src: product.image, rect: startRect })
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })

    setTimeout(() => {
      setAnimatingProductImage(null)
    }, 1000) // Animation duration
  }

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems, animatingProductImage, setAnimatingProductImage, cartIconPosition, setCartIconPosition }}>
      {children}
    </CartContext.Provider>
  )
}
