import { useState } from "react";
import FormProducts from "../../components/formProducts/FormProducts";
import Product from "../../components/product/Product";
import ProductsContext from "../../contexts/ProductsContext";
import styles from './MyFair.module.css'

const MyFair = () => {
    const [products, setProducts] = useState<any[]>([]);
    console.log('products', products)

    const handleAdd = (newProduct: any)=>{
        setProducts([...products, newProduct])
    }

    return (
        <div className="container pt-5">
          <h1 className={styles.titleText}>Lista de productos 'Mi Feria'</h1>
          <ProductsContext.Provider value={{handleAdd}}>
            
            <div className="row d-flex align-content-center justify-content-center pt-5 pb-4">
              <div className="col-6">
                <FormProducts/>
              </div>
            </div>

            <div className="row d-flex align-content-center justify-content-center py-5">
              <div className="col-8">
                {
                  products.length > 0 ? (
                    <table className="table">
                      <thead>
                          <tr className={styles.headerTable}>
                              <th scope="col">Identificación de producto</th>
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
              </div>
            </div>
          </ProductsContext.Provider>
        </div>
    )
}

export default MyFair;
