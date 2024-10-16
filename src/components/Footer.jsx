import './Footer.css'
import useFilters from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'

export default function Footer() {

  const { filters } = useFilters()
  const { cart } = useCart() 

  return (
    <footer>
        {/* {
          JSON.stringify(filters, null, 2)
        } */}
        {
          JSON.stringify(cart, null, 2)
        }
    </footer>
  )
}
