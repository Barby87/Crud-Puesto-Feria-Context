import { useContext } from "react";
// import FormProducts from "../../components/formProducts/FormProducts";
import Product from "../../components/product/Product";
import ProductsContext from "../../contexts/FairContext";
import styles from './MyFair.module.css'

const MyFair = () => {

  const { products } = useContext(ProductsContext)
    return (
        <div className="container pt-5">
          {products.length > 0 ? (
            <h1 className={styles.titleText}>Lista de productos 'Mi Feria'</h1>
            ) : (
              <p className="text-center">Aún no tienes productos, para agregar debes iniciar sesión e la sección 'Crear producto'</p>
            )
          }

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
                              <th scope="col">Eliminar producto</th>
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
                                // onClick={handleDelete}
                              />
                          ))
                        }
                      </tbody>
                    </table>
                  ) : null
                }           
              </div>
            </div>
        </div>
    )
}

export default MyFair;
