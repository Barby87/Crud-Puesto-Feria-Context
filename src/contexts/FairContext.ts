import { createContext } from 'react'

// handleAdd sería el valor por defecto (inicial)
const FairContext = createContext({
    handleAdd:(object:any) => {}, 
    handleDelete:(id:any) => {},
    handleUpdate: (product: any) => {},
    products:[{id:0, name:'', price:0, stock:0}],
    getProductById: (id:any) => ({id:0, name:'', price:0, stock:0}),
})
 
export default FairContext;