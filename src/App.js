import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

// import ComponentRenderer from "ComponentRenderer.js";
import MainLanding from "MainLanding";
// import ThankYouPage from "ThankYouPage.js";
import AboutUsPage from "pages/AboutUs";
import MenuListPage from "pages/MenuList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  return (
    <Router>
      <Switch>
        {/* <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/thank-you">
          <ThankYouPage />
        </Route> */}
        <Route path="/about-us">
          <AboutUsPage />
        </Route>
        <Route path="/menu-list">
          <MenuListPage />
        </Route>
        <Route path="/">
          <MainLanding />
        </Route>
      </Switch>
    </Router>
  );
}
