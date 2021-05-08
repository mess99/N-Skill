import { Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import "./App.css";
import Header from "../Header";
import Nav from "../../containers/Nav";
import Homepage from "../Homepage";
import Footer from "../Footer";
// import Burger from "../../containers/Nav/Burger";
import NavBar from "../../containers/Nav/NavBar";

import Lessons from "../Lessons";
import Exercices from "../../containers/Exercices";
import Stories from "../../containers/Stories";
import Story from "../../containers/Stories/Story";
import Forum from "../../containers/Forum";
import Modalquiz from "../../containers/Exercices/ModalQuiz/ModalQuiz";
import ScrollToTop from "../ScrollToTop";
import Account from "../../containers/Account";

import ForumQuestion from "../../containers/ForumQuestion";
import { useEffect } from "react";
import Loading from "../Loading";
import NewPassword from "../../containers/ResetPassword/NewPassword";
import FirstConnection from "../FirstConnection";
import Conversation from "../../containers/Lessons/Conversation";
import Chapter from "../../containers/Lessons/Conversation/Chapter";

import Vocabulary from "../Lessons/Vocabulary";
import Grammar from "../Lessons/Grammar";
import Test from "../Lessons/Test";

const App = ({
  user,
  keepLogin,
  isLoading,
  loadNew,
  news,
  loadConv,
  dialogues,
}) => {
  useEffect(keepLogin, [keepLogin]);

  useEffect(loadNew, []);

  // FIXME: faire la meme chose pour forum toutes les pages
  useEffect(loadConv, []);

  return (
    <div className="App">
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <ScrollToTop />
          <Nav />
          {/* <Burger /> */}
          <NavBar />
          <Switch>
            <Route exact path="/">
              {user.isLogged && user.firstConnection === 0 ? (
                <>
                  {/* <FirstConnection /> */}
                  <Header {...user} />
                  <Homepage news={news} />
                </>
              ) : (
                <>
                  <Header {...user} />
                  <Homepage news={news} />
                </>
              )}
            </Route>
            <Route exact path="/lessons">
              <Lessons />
            </Route>
            <Route exact path="/lessons/conversations">
              <Conversation dialogues={dialogues} />
            </Route>
            <Route path="/conversations/:slug">
              <Chapter />
            </Route>
            <Route exact path="/vocabulary">
              <Vocabulary />
            </Route>
            <Route exact path="/grammar">
              <Grammar />
            </Route>
            <Route exact path="/test">
              <Test />
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
            <Route exact path="/newpassword">
              <NewPassword />
            </Route>
            {user.isLogged && (
              <Route exact path="/account">
                <Account />
              </Route>
            )}

            <Route exact path="/*">
              <p>
                404 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Vero, neque veritatis numquam fugit magnam ea nisi esse
                exercitationem! Quod perferendis aliquam incidunt atque ut
                voluptatem nisi cupiditate officiis iure explicabo!
              </p>
            </Route>
          </Switch>
          <Footer />
        </>
      )}
    </div>
  );
};
export default App;
