import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import {
  // BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer2 from "./components/Footer2";
import ScrollToTop from "./components/ScrollToTop";
import ContactsPage from "./pages/ContactsPage";
import AboutUs from "./pages/AboutUs";
// import AllPortfolio from "./pages/AllPortfolio";
import WebDevelopment from "./pages/WebDevelopment";
import InternetMarketing from "./pages/InternetMarketing";
import Design from "./pages/Design";
import Moushen from "./pages/Moushen";
import Phone from "./components/Phone";
import Blog from "./pages/Blog";
import MyModal from "./components/MyModal";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { rootReducer } from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Cursor from "./components/cursor/Cursor";
import CustomCursor from "./components/cursor/CustomCursor";
import SocialFixed from "./components/SocialFixed";
import Up from "./components/Up";
import Theme from "./components/Theme";
import ThreeD from "./pages/ThreeD";
import BotDevelopment from "./pages/BotDevelopment";
import MobileDevelopment from "./pages/MobileDevelopment";
import Desing1 from "./pages/Desing1";
import Desing2 from "./pages/Design2";
import Desing3 from "./pages/Desing3";
import Desing4 from "./pages/Desing4";
import Desing5 from "./pages/Desing5";
import Desing6 from "./pages/Desing6";
import Desing7 from "./pages/Desing7";
// import DesignPortfolio from "./components/DesignPortfolio";
// import AAA from "./components/AAA";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <div
    className={`MAIN ${
      localStorage.getItem("theme") !== "white" ? "" : "active"
    } `}
  >
    <Provider store={store}>
      <HashRouter>
        <Cursor />

        <CustomCursor />

        <Navbar />
        <ScrollToTop />

        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/contacts" exact component={ContactsPage} />
          <Route path="/web-development" exact component={WebDevelopment} />
          <Route
            path="/mobile-development"
            exact
            component={MobileDevelopment}
          />
          <Route
            path="/internet-marketing"
            exact
            component={InternetMarketing}
          />
          <Route path="/design" exact component={Design} />

          <Route path="/alpamis-design" exact component={Desing1} />
          <Route path="/ayran-design" exact component={Desing2} />
          <Route path="/bio-design" exact component={Desing3} />
          <Route path="/centra-design" exact component={Desing4} />
          <Route path="/chaqqon-design" exact component={Desing5} />
          <Route path="/kulcha-design" exact component={Desing6} />
          <Route path="/texno-design" exact component={Desing7} />

          <Route path="/motion" exact component={Moushen} />
          <Route path="/motion-3d" exact component={ThreeD} />
          <Route path="/bot-development" exact component={BotDevelopment} />
          {/* <Route path="/design-portfolio" exact component={DesignPortfolio} /> */}
          {/* <Route path="/AAA" exact component={AAA} /> */}
        </Switch>

        <Phone />
        <Footer2 />
        <MyModal />

        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          theme="dark"
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ zIndex: "999999999" }}
        />

        <SocialFixed />
        <Up />
        <Theme />
      </HashRouter>
    </Provider>
  </div>,
  document.getElementById("KOKO")
);
