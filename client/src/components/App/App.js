import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header";
import Nav from "../../containers/Nav";
import Homepage from "../Homepage";
import Footer from "../Footer";
import Burger from "../Nav/Burger";
import Lessons from "../Lessons";
import Exercices from "../../containers/Exercices";
import Stories from "../../containers/Stories";
import Story from "../../containers/Stories/Story";
import Forum from "../../containers/Forum";
import Modalquiz from "../../containers/Exercices/ModalQuiz/ModalQuiz";
import ScrollToTop from "../ScrollToTop";
import ForumQuestion from "../../containers/ForumQuestion";
import { useEffect } from "react";

const App = ({ userId, keepLogin, isLoading }) => {
  useEffect(keepLogin, []);
  return (
    <div className="App">
      {isLoading && <p>loading</p>}
      {!isLoading && (
        <>
          <ScrollToTop />
          <Nav />
          <Burger />
          <Switch>
            <Route exact path="/">
              <Header />
              <Homepage />
            </Route>
            {/* TODO: delete tips ? and add tips in lesson, exercice ... 💡 */}
            <Route exact path="/lessons">
              <Lessons />
            </Route>
            <Route exact path="/exercices">
              <Exercices />
            </Route>
            <Route exact path="/exercices/:slug">
              <Exercices />
              <Modalquiz />
            </Route>
            <Route exact path="/stories">
              <Stories />
            </Route>
            <Route exact path="/stories/:slug">
              <Story />
            </Route>
            <Route exact path="/forum">
              <Forum />
            </Route>
            <Route exact path="/forum/:slug">
              <ForumQuestion />
            </Route>
          </Switch>
          <Footer />
        </>
      )}
    </div>
  );
};
export default App;
