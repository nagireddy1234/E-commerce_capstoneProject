import React from 'react';
import {Switch,Route} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import Details  from "./Components/Details";
import DefaultPage from "./Components/DefaultPage";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <NavBar />
      <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/Cart" component={Cart} />
      <Route path="/Details" component={Details} />
      <Route component={DefaultPage} />
      </Switch>
      </React.Fragment>
    )
  }
}

export default App