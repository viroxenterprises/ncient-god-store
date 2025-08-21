
'use client'

import { useState } from 'react'

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')

  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-400">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-gold focus:border-gold"
          placeholder="**** **** **** ****"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-400">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-gold focus:border-gold"
            placeholder="MM/YY"
            required
          />
        </div>
        <div>
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-400">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-gold focus:border-gold"
            placeholder="123"
            required
          />
        </div>
      </div>
      <div className="flex items-center justify-center pt-4">
        {/* Trust Badges */}
        <span className="text-xs text-gray-500">Secure payments with</span>
        <img src="/images/trust-badges.png" alt="Secure payment" className="h-8 ml-4" />
      </div>
    </form>
  )
}

export default PaymentForm
