import { products as initialProducts } from './mocks/products.json'
import Products from "./components/Products"
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { useState } from 'react'
import useFilters from './hooks/useFilters'
import { CartProvider } from './context/cart'



export default function App() {

  const [products] = useState(initialProducts)
  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Cart />
      <Header/>
      <Products products={filteredProducts}/>
      <Footer />
    </CartProvider>
  )
}


