import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import LoginContext from '../../contexts/LoginContext'

interface Props {
    component: React.ComponentType<any>;
    path: string;
    exact: boolean;        
}

// Se recibe un componente como prop (enforma de objeto)
// ...Rest representa al resto del objeto Component (Rest.exact, Rest.exact)
const PrivateRoute = ({component: Component, ...Rest}: Props) => {
    // La propiedad isLogin se extrae del LoginContext
    const { isLogin } = useContext(LoginContext);
    // El componete solamente se renderiza si la propiedad isLogin es true
    // return isLogin ? <Route path={Rest.path} exact={Rest.exact} render={routeProps=><Component {...routeProps}/>} /> : <Redirect to="/"/>
    // Función render le entrega las props de la ruta al componente
    return isLogin ? <Route {...Rest} render={routeProps=><Component {...routeProps}/>} /> : <Redirect to="/"/>

}

export default PrivateRoute
