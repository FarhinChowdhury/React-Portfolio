import './App.css';
import NavBar from "./components/NavBar";
import {Switch, Route} from "react-router-dom"
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Contact from "./pages/Contact";



function App() {
  return (

      <div className="App">
        <NavBar className="NavBar"/>
        <div className="container">
          <Switch>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path = "/">
            <Home/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          </Switch>

        </div>
      </div>

  );
}

export default App;
