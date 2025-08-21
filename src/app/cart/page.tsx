
'use client'

import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'

const CartPage = () => {
  const { cart, removeFromCart, totalItems } = useCart()

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto py-12">
      <h1 className="font-display text-4xl md:text-6xl font-bold text-center mb-8">
        Your Cart
      </h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <Link href="/closet" className="text-gold hover:underline mt-4 inline-block">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-700 py-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-24 w-24">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{item.name}</h3>
                    <p className="text-gold">${item.price}</p>
                    <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="font-display text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <p>{totalItems} Items</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-bold text-xl mt-4">
              <p>Total</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <button className="bg-primary-cta hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors w-full mt-8">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage
