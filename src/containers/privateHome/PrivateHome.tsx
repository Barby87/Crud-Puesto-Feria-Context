import { useContext } from 'react'
import LoginContext from '../../contexts/LoginContext'

const PrivateHome = () => {
    const {logout} = useContext(LoginContext)
    return (
        <div>
            <h1>Private Home</h1>
            <button onClick={e=>logout()}>Logout</button>
        </div>
    )
}

export default PrivateHome