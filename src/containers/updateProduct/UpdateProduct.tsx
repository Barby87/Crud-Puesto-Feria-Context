import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormUpdateProduct from "../../components/formUpdateProduct/FormUpdateProduct";
import FairContext from "../../contexts/FairContext";

const UpdateProduct = () => {
    const { getProductById } = useContext(FairContext);
    const { id } = useParams<any>();
    const [name, setName] = useState<any>('');
    const [price, setPrice] = useState<any>(0);
    const [stock, setStock] = useState<any>(0)

    useEffect(() => {
        const {name, price, stock} = getProductById(id);
        setName(name);
        setPrice(price);
        setStock(stock);
    }, [getProductById, name, price, id]);

    return (
        <>
            {/* Me aseguro que name y price sean distinto de '' o 0 */}
            {name&&price&&<div className="row d-flex align-content-center justify-content-center pt-5 pb-4">
                    <div className="col-6">
                        <FormUpdateProduct 
                            id={id} 
                            name={name} 
                            price={price} 
                            stock={stock}
                        />          
                    </div>
                </div>
                }
           </>
    )
}

export default UpdateProduct
