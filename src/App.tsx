import './App.css';
import MyFair from './containers/myFair/MyFair';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './containers/about/About';
import Home from './containers/home/Home';
import NotFound from './containers/notFound.tsx/NotFound';
import FairContextManager from './contexts/FairContextManager';
import NavBar from './containers/navBar/NavBar';
import Comments from './containers/comments/Comments';
import LoginContextManager from './contexts/LoginContextManager';
import Login from './containers/login/Login';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import PrivateHome from './containers/privateHome/PrivateHome';

function App() {

  return (
   <div className="App container">
     <LoginContextManager>
       <FairContextManager>
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            {/* Otra forma */}
            {/* <Route path="/" exact component={About}/> */}
            <Route path="/about" exact>
              <About/>
            </Route>
            <Route path="/privateMyFair" exact>
              <PrivateRoute path="/privateMyFair" exact component={MyFair}/>
            </Route>
            <Route path="/comments/:id" exact>
              <Comments/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/privateHome" exact>
              <PrivateRoute path="/privateHome" exact component={PrivateHome}/>
            </Route>
            <Route path="*" exact>
              <NotFound/>
            </Route>
          </Switch>
        </Router>
       </FairContextManager>
     </LoginContextManager>
   </div>
  );
}

export default App;
