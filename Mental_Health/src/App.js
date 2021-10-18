import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewUser from "./components/NewUser";
import Landing from "./components/Landing";
import Home from './components/Home';
import Read from './components/Read'
import Instructions from './components/Instructions';
import Anxiety from './components/Tests/Anxiety';
import Depression from './components/Tests/Depression';
import General from './components/Tests/General';
import Ptsd from './components/Tests/Ptsd';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/read">
          <Read />
        </Route>
        <Route path="/signUp">
          <NewUser />
        </Route>
        <Route path="/trial">
          <Instructions />
        </Route>
        <Router>
          <Route path="/" />
          <Route path="/" exact component={Landing} />
          <Route path="/read" exact component={Read} />
          <Route path="/test" exact component={Home} />
          <Route path="/trial" exact component={Instructions} />
          <Route path="/signUp" exact component={NewUser} />
          <Route path="/test/anxiety" exact component={Anxiety} />
          <Route path="/test/depression" exact component={Depression} />
          <Route path="/test/general" exact component={General} />
          <Route path="/test/ptsd" exact component={Ptsd} />
         </Router>
      </Switch>
    </Router>
  );
};

export default App;
