import { useState, useId } from 'react'
import useFilters from '../hooks/useFilters'
import './Filters.css'

export default function Filters() {

    const { filters, setFilters } = useFilters()
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterID = useId()
    const categoryFilterId = useId()

    function handleChangeMinPrice(e) {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    function handleChangeCategory(e) {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

  return (
    <section className="filters">
        <div>
            <label htmlFor={minPriceFilterID}>Price</label>
            <input 
                type="range" 
                id={minPriceFilterID} 
                min='0' 
                max='1000' 
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
                />
            <span>${filters.minPrice}</span>
        </div>

        <div>
            <label htmlFor={categoryFilterId}>Category</label>
            <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option value="all">Todas</option>
                <option value="laptops">Portátiles</option>
                <option value="smartphones">Móviles</option>
            </select>
        </div>
    </section>
  )
}
