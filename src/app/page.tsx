import ParallaxHero from '@/components/ParallaxHero'

export default function Home() {
  return (
    <>
      <ParallaxHero />
      {/* Other homepage sections will go here */}
      <div className="h-screen bg-background">
        {/* Placeholder for content below the hero */}
      </div>
    </>
  )
}
