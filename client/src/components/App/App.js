import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header";
import Nav from "../Nav";
import Homepage from "../Homepage";
import Footer from "../Footer";
import Burger from "../Nav/Burger";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Burger />
      <Switch>
        <Route exact path="/">
          <Header />
          <Homepage />
        </Route>
        <Route exact path="/lessons"></Route>
        <Route exact path="/forum"></Route>
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
