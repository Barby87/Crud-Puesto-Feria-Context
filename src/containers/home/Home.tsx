import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductsList from "../../components/productsList/ProductsList";
import ProductsContext from "../../contexts/FairContext";
import styles from './Home.module.css';

const Home = () => {
    const location = useLocation();
  const { products } = useContext(ProductsContext)


    useEffect(() => {
      console.log('location', location);
    }, [location])
  
    return (
        <div className="container pt-5">
        {products.length > 0 ? (
          <h1 className={styles.titleText}>Lista de productos 'Mi Feria'</h1>
          ) : (
            <div className={styles.textInfo}>
                <div className="row d-flex justify-content-center pt-5 mt-5">
                   <div className="col-6">
                        <p className="text-center">La lista de productos está vacía, para agregar más productos debes <b>iniciar sesión</b> e ir la sección <b>'Crear producto'</b>.</p>
                   </div>
                </div>
            </div>
          )
        }
          <div className="row d-flex align-content-center justify-content-center py-5">
            <div className="col-8">
              {
                products.length > 0 ? (
                  <>
                      <ProductsList/>
                      <div className={styles.textRed}>
                        <p className="text-center pt-5 text-red">Para acceder a las demás funcionalidades debes iniciar sesión.</p>
                      </div>
                  </>
                ) : null
              }           
            </div>
          </div>
      </div>
    )
}

export default Home;
