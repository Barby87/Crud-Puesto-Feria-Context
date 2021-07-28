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
            {/* <td>
                <button type="button" onClick={onClick} className="btn btn-danger">Danger</button>
            </td> */}
        </tr>
    )
}

export default Product;
