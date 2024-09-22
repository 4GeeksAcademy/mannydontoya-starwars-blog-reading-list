import React from "react";
import injectContext from "./store/appContext.js";
import { HashRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./component/scrollToTop.js";
import { Navbar } from "./component/navbar.js";
import { Home } from "./views/home.js";
import { Details } from "./views/DetailsPage.js";
import { Footer } from "./component/footer.js";

import "../styles/mediaQuery.css";
import "../styles/starfield.css";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div id="layoutDiv">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <HashRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/details/characters/:theid" element={<Details category="characters" />} />
                        <Route path="/details/planets/:theid" element={<Details category="planets" />} />
                        <Route path="/details/starships/:theid" element={<Details category="starships" />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </HashRouter>
        </div>
    );
};

export default injectContext(Layout);