import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PaymentUPI from "./pages/PaymentUPI";
import SignupPage from "./pages/SignupPage";
import PaymentViaCard from "./pages/PaymentViaCard";
import ContactPage from "./pages/ContactPage";
import SendMessage from "./pages/SendMessage";
import Layout from "./components/layout/Layout";
import AboutUs from "./pages/AboutUs";

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/paymentupi" component={PaymentUPI} />
        <Route path="/paymentviacard" component={PaymentViaCard} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/sendmessage" component={SendMessage} />
      </Switch>
    </Layout>
  );
};

export default App;
