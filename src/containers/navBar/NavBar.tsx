import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LoginContext from '../../contexts/LoginContext';

const NavBar = () => {
    const { logout } = useContext(LoginContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink exact activeClassName="my-active" className="navbar-brand" to="/login">Login</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/list">Listado de productos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/create">Crear producto</NavLink>
                    </li>
                    {/* <li>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </li> */}
                </ul>
               
                <div className="mx-3">
                    <button className="btn btn-danger ml-2" onClick={e=>logout()}>Cerrar sesión</button>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
