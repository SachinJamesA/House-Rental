import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './myComponents/Navbar';
// import Cards from './myComponents/Cards';
import Home from './myComponents/Home';
import Footer from './myComponents/Footer';
import About from './myComponents/About';
import Contact from './myComponents/Contact';
import Singnup from './myComponents/Singnup';
import Log from './myComponents/Log';
import Rentals from './myComponents/Rentals';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/rentals">
              <Rentals />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/Signup">
              <Singnup />
            </Route>
            <Route exact path="/Login">
              <Log />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
