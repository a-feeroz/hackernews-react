import { hashHistory } from "react-router";
import ReactGA from "react-ga";

require("./style.css");

require("setimmediate");

var React = require("react");
var { render } = require("react-dom");
var Router = require("react-router/lib/Router");
var useScroll = require("react-router-scroll/lib/useScroll");
var applyRouterMiddleware = require("react-router/lib/applyRouterMiddleware");

var routes = require("./routes").default;

const trackingId = "UA-164641455-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: auth.currentUserId(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
});
ReactGA.pageview("/");

render(
  <Router
    history={hashHistory}
    render={applyRouterMiddleware(useScroll())}
    routes={routes}
  />,
  document.getElementById("app")
);
