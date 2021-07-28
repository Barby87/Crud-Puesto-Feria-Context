interface ProductProps {
    id: number;
    name: string;
    price: number;
    stock: number;
}

const Product = ({ id, name, price, stock }: ProductProps) => {
   return (
       <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{stock}</td>
        </tr>
    )
}

export default Product;
