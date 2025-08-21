
'use client'

import { Product } from '@/lib/products'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <motion.div
        whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.2)' }}
        className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
      >
        <div className="relative h-96 w-full">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-display text-xl font-bold">{product.name}</h3>
          <p className="text-gold">${product.price}</p>
        </div>
      </motion.div>
    </Link>
  )
}

export default ProductCard
