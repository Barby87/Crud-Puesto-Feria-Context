import { useContext } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext";

interface ProductProps {
    id: number;
    name: string;
    price: number;
    stock: number;
}

const Product = ({ id, name, price, stock }: ProductProps) => {
    const { isLogin } = useContext(LoginContext);

   return (
       <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{stock}</td>
            {isLogin ? (
                <td className="text-center">
                    <Link to={`remove/${id}`} className="btn btn-danger">Eliminar</Link>
                </td> 
            ) : null}
            {isLogin ? (
                <td className="text-center">
                    <Link to={`update/${id}`} className="btn btn-warning">Editar</Link>
                </td>
            ) : null}
        </tr>
    )
}

export default Product;
