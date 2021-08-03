import { useState } from 'react'
import FairContext from './FairContext';

interface Props {
    children: JSX.Element
}

// Agrupa todos los elementos del context FairContext y lo exporta con el Provider incorporado, por lo que se usa como un elemento tsx
const FairContextManager = ({children}: Props) => {
    const [products, setProducts] = useState<any>([]);

    const handleAdd = (newProduct: any)=>{
      setProducts([...products, newProduct])
    }

    return (
        <div>
            <FairContext.Provider value={{handleAdd, products}}>
                {children}
            </FairContext.Provider>
        </div>
    )
}

export default FairContextManager
