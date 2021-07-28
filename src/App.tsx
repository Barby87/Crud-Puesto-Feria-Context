import './App.css';
import MyFair from './containers/myFair/MyFair';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './containers/about/About';
import Home from './containers/home/Home';
import NotFound from './containers/notFound.tsx/NotFound';

function App() {
  return (
   <div className="App">
      <Router>
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
          <Route path="*" exact>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
