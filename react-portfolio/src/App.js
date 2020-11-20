import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {Switch, Route} from "react-router-dom"
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Contact from "./pages/Contact";



function App() {
  return (

      <div className="App">
        <NavBar/>
          <Switch>
            <Route path="/portfolio">
              <Portfolio/>
            </Route>
            <Route exact path = "/">
              <Home/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
          </Switch>
        <Footer/>
      </div>

  );
}

export default App;
