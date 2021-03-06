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
import { useEffect, useState } from "react";
import Loading from "../Loading";
import NewPassword from "../../containers/ResetPassword/NewPassword";
import FirstConnection from "../FirstConnection";
import Conversation from "../../containers/Lessons/Conversation";
import Chapter from "../../containers/Lessons/Conversation/Chapter";
import Vocabulary from "../Lessons/Vocabulary";
import Grammar from "../Lessons/Grammar";
import Test from "../Lessons/Test";
import Legacy from "../Footer/Legacy";

import NotFound from "../NotFound";
// PAGE EXERCICES
import banniereDark from "../../assets/images/exercices/exercice-banniere-full.jpg";
import banniereLigth from "../../assets/images/exercices/exercice-banniere-full_ligth.jpg";

// STYLES COMPONENTS
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { lightTheme, darkTheme } from "../../styles/Themes";
import { useDarkMode } from "../../styles/useDarkMode";
import Toggle from "../../styles/Toggler";

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
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const imageExercice = theme === "light" ? banniereLigth : banniereDark;
  // FIXME: faire la meme chose pour forum toutes les pages (load dans app)
  useEffect(loadConv, []);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />

      <div className="App">
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <ScrollToTop />
            <Nav />
            <Toggle theme={theme} toggleTheme={themeToggler} />

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
                <Exercices image={imageExercice} />
              </Route>

              <Route exact path="/exercices/:slug">
                <Exercices image={imageExercice} />
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
              <Route path="/privacy">
                <Legacy />
              </Route>
              {user.isLogged && (
                <Route exact path="/account">
                  <Account />
                </Route>
              )}

              <Route path="/*">
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};
export default App;
