import { createContext, useState } from "react"

// crear el contexto
// este es el que tenemos que consumir
export const FiltersContext = createContext()

// crear provider, para proveer el contexto
// este es el que nos provee de acceso a los datos
export function FiltersProvider({ children }) {

    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            {children}
        </FiltersContext.Provider>
    )
}

