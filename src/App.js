import React,{Component} from 'react';
import './App.css';
import {  
  BrowserRouter as Router, 
  Switch,
  Route
  
} from "react-router-dom";
import Register from './pages/Register';
import Coba from './pages/Coba'
import Login from './pages/Login';
import CategoryPage from './pages/CategoryPage';

import Home from './pages/Home';
class App extends Component {
  render() {
    
  return (

    <Router>
      <Switch>
          <Route exact path="/register">
          <Register/>
          </Route>
        <Route exact path="/login">
          <Login/>
          </Route>
          <Route exact path="/coba">
          <Coba/>
          </Route>
          <Route path='/home'>
          <Home/>
          </Route>
          <Route path='/category_page'>
          <CategoryPage/>
          </Route>
          
        </Switch>
    </Router>
    
   
  );
}
}  
export default App;
