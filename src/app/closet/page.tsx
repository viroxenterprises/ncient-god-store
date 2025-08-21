
import { products } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

const ClosetPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="font-display text-4xl md:text-6xl font-bold text-center mb-8">
        The Closet
      </h1>
      <div className="flex overflow-x-auto space-x-8 p-8 scrollbar-hide">
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-80">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClosetPage
