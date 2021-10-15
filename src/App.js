import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Profiles from "./Pages//Profiles/Profiles";
import Artist from "./Pages/Artist/Artist";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import NotFoundPage from "./Pages/404/404";

function App() {
  return (
    // <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Skills" component={Skills} />
        <Route exact path="/Profiles" component={Profiles} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Artist" component={Artist} />
        <Route component={NotFoundPage} />
        {/* <Redirect to="/404" /> */}
      </Switch>
    </Router>
    // </div>
  );
}

export default App;
