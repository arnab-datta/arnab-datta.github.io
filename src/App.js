import "./App.css";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import Profiles from "./Pages//Profiles/Profiles";
import Projects from "./Pages/Projects/Projects";
import Artist from "./Pages/Artist/Artist";
import NotFoundPage from "./Pages/404/404";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  browserHistory,
  IndexRoute,
  Redirect,
} from "react-router-dom";

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
          <Redirect to="/404" />
        </Switch>
      </Router>
    // </div>
  );
}

export default App;
