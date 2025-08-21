
'use client'

import { useCart } from '@/context/CartContext'
import Image from 'next/image'

const OrderSummary = () => {
  const { cart, totalItems } = useCart()
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b border-gray-700 py-4">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">{item.name}</h3>
              <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
            </div>
          </div>
          <p className="text-gold">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
      <div className="flex justify-between font-bold text-xl mt-4">
        <p>Total</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default OrderSummary
