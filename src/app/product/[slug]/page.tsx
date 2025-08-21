
'use client'

import { products } from '@/lib/products'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import { useRef } from 'react'

interface ProductPageProps {
  params: {
    slug: string
  }
}

const ProductPage = ({ params }: ProductPageProps) => {
  const product = products.find((p) => p.slug === params.slug)
  const { addToCart } = useCart()
  const imageRef = useRef<HTMLDivElement>(null)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    const rect = imageRef.current?.getBoundingClientRect()
    addToCart(product, rect ? { top: rect.top, left: rect.left } : undefined)
  }

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div ref={imageRef} className="relative h-[500px]">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold">{product.name}</h1>
          <p className="text-gold text-2xl mt-2">${product.price}</p>
          <p className="mt-4">{product.description}</p>
          <div className="mt-8">
            <button 
              onClick={handleAddToCart}
              className="bg-primary-cta hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Claim Yours
            </button>
            <p className="text-sm text-gray-400 mt-2">Limited Drop: Only {product.inventory} remaining</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
