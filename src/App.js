import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import About from "./components/About";
import Register from "./components/Register";
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} /> 
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
