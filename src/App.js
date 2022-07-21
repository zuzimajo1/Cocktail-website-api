import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {About} from "./Components/About";
import {Home} from "./Components/Home";
import {Navbar} from "./Components/Navbar";
import {Error} from "./Components/Error";
import {SingleCocktail} from "./Components/SingleCocktail";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route path="/about" component={Navbar}>
          <About />
        </Route>
        <Route path="/cocktail/:id" children={<SingleCocktail />}>
        </Route>
        <Route path="*" component={Navbar}>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
