import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import FairContext from "../../contexts/FairContext";

const RemoveProduct = () => {
    const { getProductById, handleDelete } = useContext(FairContext)
    const { id } = useParams<any>();
    const [name, setName] = useState<any>('');
    const [price, setPrice] = useState<any>(0);
    const history = useHistory();

    useEffect(() => {
        const product = getProductById(id);
        debugger
        setName(product?.name);
        setPrice(product?.price);
    }, [getProductById, name, price, id]);

    const handleConfirm = (e: any) => {
        handleDelete(id);
        history.push('/list');
    }

    return (
            name && <div>
                        <h4 className="text-center mt-5">¿Estás seguro que deseas borrar el siguiente producto?</h4>
                        <div className="row d-flex align-content-center justify-content-center pt-5 pb-4 mx-auto">
                            <div className="col-3">
                                <div><b>id:</b> {id}</div>
                                <div><b>nombre:</b> {name}</div>
                                <div><b>Precio:</b> {price}</div>
                               <div className="d-grid gap-2 mx-auto mt-3">
                                    <button className="btn btn-danger" onClick={e => handleConfirm(e)}>Borrar producto</button>
                               </div>
                            </div>
                        </div>
                    </div>        
    )
}

export default RemoveProduct;
