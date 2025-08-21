
'use client'

import { useState } from 'react'
import ShippingForm from '@/components/checkout/ShippingForm'
import PaymentForm from '@/components/checkout/PaymentForm'
import OrderSummary from '@/components/checkout/OrderSummary'

const CheckoutPage = () => {
  const [step, setStep] = useState('shipping')

  return (
    <div className="container mx-auto py-12">
      <h1 className="font-display text-4xl md:text-6xl font-bold text-center mb-8">
        Checkout
      </h1>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center items-center mb-8">
          <div className={`flex items-center ${step === 'shipping' ? 'text-gold' : 'text-gray-500'}`}>
            <span className="font-bold">1. Shipping</span>
          </div>
          <div className="flex-1 h-px bg-gray-700 mx-4"></div>
          <div className={`flex items-center ${step === 'payment' ? 'text-gold' : 'text-gray-500'}`}>
            <span className="font-bold">2. Payment</span>
          </div>
          <div className="flex-1 h-px bg-gray-700 mx-4"></div>
          <div className={`flex items-center ${step === 'confirm' ? 'text-gold' : 'text-gray-500'}`}>
            <span className="font-bold">3. Confirm</span>
          </div>
        </div>

        {step === 'shipping' && (
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">Shipping Address</h2>
            <ShippingForm />
            <button onClick={() => setStep('payment')} className="bg-primary-cta hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors w-full mt-8">
              Continue to Payment
            </button>
          </div>
        )}

        {step === 'payment' && (
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">Payment Information</h2>
            <PaymentForm />
            <button onClick={() => setStep('confirm')} className="bg-primary-cta hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors w-full mt-8">
              Review Order
            </button>
          </div>
        )}

        {step === 'confirm' && (
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">Confirm Order</h2>
            <OrderSummary />
            <button className="bg-primary-cta hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors w-full mt-8">
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CheckoutPage
