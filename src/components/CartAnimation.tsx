
'use client'

import { useCart } from '@/context/CartContext'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const CartAnimation = () => {
  const { animatingProductImage, cartIconPosition } = useCart()

  return (
    <AnimatePresence>
      {animatingProductImage && cartIconPosition && animatingProductImage.rect && (
        <motion.div
          initial={{
            x: animatingProductImage.rect.left,
            y: animatingProductImage.rect.top,
            width: animatingProductImage.rect.width,
            height: animatingProductImage.rect.height,
            position: 'fixed',
            zIndex: 9999,
          }}
          animate={{
            x: cartIconPosition.left,
            y: cartIconPosition.top,
            width: 0,
            height: 0,
            opacity: 0,
          }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <Image
            src={animatingProductImage.src}
            alt="Animating product"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CartAnimation
