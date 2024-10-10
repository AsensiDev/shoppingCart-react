import { products as initialProducts } from './mocks/products.json'
import Products from "./components/Products"
import Header from './components/Header'
import { useState } from 'react'
import Footer from './components/Footer'

function useFilters() {
  
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && 
        (
          filters.category === 'all' ||
          filters.category === product.category
        )
      )
    })
  }
  return { filterProducts, setFilters}
}

export default function App() {

  const [products] = useState(initialProducts)
  const {filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts}/>
      <Footer />
    </>
  )
}


