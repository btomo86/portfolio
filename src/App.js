import Nav from "./components/Nav";
import GlobalStyle from "./styles/GlobalStyles";
import About from "./components/About";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/skills" exact>
            <Skills />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
