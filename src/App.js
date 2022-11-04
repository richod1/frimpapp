import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
 import Detailes from './components/Detailes';
 import Login from './components/Login';
 import Register from './components/Register';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

 } from "react-router-dom";
 function App() {
  return (
    <div className="App">

  <Router>
        
        <Header/>
  <Switch>
    <Route path="/login">
        <Login/>
        </Route >

        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/detailes">
        <Detailes/>
        </Route>
        <Route path="/">
        <Home />
        </Route>
  </Switch>
    
    
  </Router>
      
      
    </div>
  );
}

export default App;
