import { useState } from "react";
import FormProducts from "../../components/formProducts/FormProducts";
import Product from "../../components/product/Product";
import ProductsContext from "../../contexts/ProductsContext";

const MyFair = () => {
    const [products, setProducts] = useState<any[]>([]);
    console.log('products', products)

    const handleAdd = (newProduct: any)=>{
        setProducts([...products, newProduct])
    }

    return (
        <div className="container pt-5">
          <ProductsContext.Provider value={{handleAdd}}>
            <FormProducts/>
            {
              products.length > 0 ? (
                <table className="table">
                  <thead>
                      <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Stock</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                      products.map((product) => (
                          <Product
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            stock={product.stock}
                          />
                      ))
                    }
                  </tbody>
                </table>
              ) : null
            }
            
            
          </ProductsContext.Provider>
        </div>
    )
}

export default MyFair;
