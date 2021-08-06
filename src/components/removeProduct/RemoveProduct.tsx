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
                        <p>¿Estás seguro que deseas borrar el siguiente producto?</p>
                        <div>id: {id}</div>
                        <div>nombre: {name}</div>
                        <div>Precio: {price}</div>
                        <button className="btn btn-danger" onClick={e => handleConfirm(e)}>Borrar producto</button>
                    </div>        
    )
}

export default RemoveProduct;
