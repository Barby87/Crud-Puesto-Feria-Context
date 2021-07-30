import { useParams } from "react-router-dom";

const Comments = () => {
    // Obteniendo el parámetro de la ruta dinámica a través del hook useParams
    const { id } = useParams<any>()
    return (
        <div>
            Comentario {id}
        </div>
    )
}

export default Comments;
