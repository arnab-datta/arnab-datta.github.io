// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./ArnabDattaPortfolio.css";
import Profiles from "./Pages/Profiles/Profiles";
import Artist from "./Pages/Artist/Artist";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import NotFoundPage from "./Pages/404/404";

function ArnabDattaPortfolio() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Skills" component={Skills} />
        <Route exact path="/Profiles" component={Profiles} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Artist" component={Artist} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default ArnabDattaPortfolio;


// old - v5 <Route exact path="/" component={Home} />
// new - v6 <Route path="/" element={<Home />} /
// If you are using react-router-dom v6 it looks like Switch has been replaced with Routes