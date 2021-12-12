import React from "react";
import Home from "./Home";
import Room from "./Room";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar>
        <Logo>
          <img src="/images/ChatDord.png" alt="logo" />
        </Logo>
        <Addroom>ADD ROOM</Addroom>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/room">
            <Room />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
const Navbar = styled.nav`
  width: 100%;
  height: 90px;
  background-color: rgba(162, 101, 247, 0.7);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Logo = styled.div`
  & > img {
    position: relative;
    width: 250px;
    height: 250px;
    bottom: 70px;
    right: 50px;
  }
`;
const Addroom = styled.button`
  height: 35px;
  margin-top: 30px;
  margin-right: 50px;
  outline: none;
  border: none;
  width: 100px;
  background-color: rgb(180, 12, 214);
  color: white;
`;
export default App;
