import React from "react";
import NavBar from "./components/navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ThingsDemo from "./things/ThingsDemo";
import NoMatch from "./components/NoMatch";
import Register from "./components/Register";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import FetchUser from "./components/FetchUser";
import { Container } from "semantic-ui-react";
function App() {
  return (
    <>
    <FetchUser>
      <Container>
        <NavBar />
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/ThingsDemo" component={ThingsDemo} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
    </>
  );
}

export default App;
