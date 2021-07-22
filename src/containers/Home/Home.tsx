import { useState } from "react";
import FormProducts from "../../components/formProducts/FormProducts";
import Products from "../../components/products/Products";

const Home = () => {

    const [productos, setProductos] = useState([
        {
          "name": "Manzana",
          "price": 300,
          "stock": 10
        },
        {
          "name": "Pera",
          "price": 450,
          "stock": 1
        },
      ]
      )


    const handlerOnAdd = ()=>{
        setProductos([...productos,{
            "name": "Pera",
            "price": 450,
            "stock": 1
          }])
    }


    return (
        <div className="container pt-5">
            <FormProducts handlerOnAdd={handlerOnAdd()} />
            <Products/>
        </div>
    )
}

export default Home;
