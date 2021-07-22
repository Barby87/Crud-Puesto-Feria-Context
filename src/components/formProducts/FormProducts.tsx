import { useState } from "react"


interface Props {
    handlerOnAdd: () => void;
}


const FormProducts = ({handlerOnAdd}: Props) => {
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState<any>(0) ;
    const [stock, setStock] = useState<any>(0)

    return (
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre de producto</label>
                    <input type="text" className="form-control" id="productName" aria-describedby="emailHelp" value={productName} onChange={e => setProductName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input type="text" className="form-control" id="productPrice" value={productPrice} onChange={e => setProductPrice(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Cantidad</label>
                    <input type="text" className="form-control" id="productPrice" value={stock} onChange={e => setStock(e.target.value)}/>
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary">Agregar producto</button>
            </form>
    )
}

export default FormProducts
