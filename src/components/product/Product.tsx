import { Link } from "react-router-dom";

interface ProductProps {
    id: number;
    name: string;
    price: number;
    stock: number;
    // onClick: ()=>{}
}

const Product = ({ id, name, price, stock }: ProductProps) => {
   return (
       <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{stock}</td>
            <td>
                <Link to={`remove/${id}`} className="btn btn-danger">Eliminar</Link>
            </td>
        </tr>
    )
}

export default Product;
