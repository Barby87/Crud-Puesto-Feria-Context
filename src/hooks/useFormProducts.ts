import { useState } from "react"

// Hook para manejar formulario
const useFormProducts = (inputs:any) => {
    const [formValues, setFormValues] = useState(inputs);

    const handleChange = ({target}: any) => {
        const { name, value } = target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    return {formValues, setFormValues, handleChange}
}

export default useFormProducts;