import './Footer.css'
import useFilters from '../hooks/useFilters'

export default function Footer() {

  const { filters } = useFilters()

  return (
    <footer>
        {
          JSON.stringify(filters, null, 2)
        }
    </footer>
  )
}
