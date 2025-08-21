
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ParallaxHero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  return (
    <div
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* TODO: Replace this div with an Image component from Next.js */}
      <motion.div
        className="absolute inset-0 bg-gray-900 bg-cover bg-center"
        style={{
          y,
          backgroundImage: 'url(/images/hero-bg.jpg)', // Placeholder
        }}
      />
      <motion.div
        className="z-10 text-center text-white"
        style={{ opacity, scale }}
      >
        <h1 className="font-display text-6xl md:text-8xl font-bold">
          Divinity is Overrated.
        </h1>
        <p className="font-sans text-xl md:text-2xl mt-4">Ascend.</p>
      </motion.div>
    </div>
  )
}

export default ParallaxHero
