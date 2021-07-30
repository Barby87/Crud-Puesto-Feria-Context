import './App.css';
import MyFair from './containers/myFair/MyFair';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './containers/about/About';
import Home from './containers/home/Home';
import NotFound from './containers/notFound.tsx/NotFound';
import FairContextManager from './contexts/FairContextManager';
import NavBar from './containers/navBar/NavBar';
import Comments from './containers/comments/Comments';

function App() {

  return (
   <div className="App container">
     <FairContextManager>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/about" exact>
            <About/>
          </Route>
          <Route path="/myFair" exact>
            <MyFair/>
          </Route>
          <Route path="/comments/:id" exact>
            <Comments/>
          </Route>
          <Route path="*" exact>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
     </FairContextManager>
   </div>
  );
}

export default App;
