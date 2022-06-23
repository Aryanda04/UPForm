import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutComponent from "../component/layoutComponent";
import Dashboard from "../pages/dashboard";
import LoginPage from "../pages/loginPage";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path="/dashboard" exact>
            <LayoutComponent content={<Dashboard />} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Pages;
