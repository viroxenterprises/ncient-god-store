
export interface Product {
  id: string
  name: string
  slug: string
  price: number
  description: string
  image: string
  inventory: number
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Rebel God Hoodie',
    slug: 'rebel-god-hoodie',
    price: 120,
    description: 'A heavyweight hoodie with an oversized fit, featuring a screen-printed graphic of a forgotten deity.',
    image: '/images/product1.jpg', // Placeholder
    inventory: 23,
  },
  {
    id: '2',
    name: 'Ascendant Tee',
    slug: 'ascendant-tee',
    price: 65,
    description: 'A premium cotton t-shirt with a relaxed fit, featuring an embroidered emblem of a celestial snake.',
    image: '/images/product2.jpg', // Placeholder
    inventory: 45,
  },
  {
    id: '3',
    name: 'Mythic Cargo Pants',
    slug: 'mythic-cargo-pants',
    price: 150,
    description: 'Durable cargo pants with a tapered fit, multiple pockets, and subtle runic embroidery.',
    image: '/images/product3.jpg', // Placeholder
    inventory: 15,
  },
  {
    id: '4',
    name: 'Oracle Beanie',
    slug: 'oracle-beanie',
    price: 45,
    description: 'A soft, ribbed beanie with a woven patch of a cryptic eye.',
    image: '/images/product4.jpg', // Placeholder
    inventory: 50,
  },
]
