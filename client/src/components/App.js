import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Layout } from "antd";

import Header from "./Header";
import Footer from "./Footer";

import Home from "./Home";
import CompanyList from "./Company/CompanyList";
import CompanyDetails from "./Company/CompanyDetails";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Header />
        <Layout.Content style={{ background: "#fff", marginTop: 64 }}>
          <div style={{ background: "#fff", padding: 25, minHeight: 280 }}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/company/:id" component={CompanyDetails} />
              <Route path="/company" exact component={CompanyList} />
            </Switch>
          </div>
        </Layout.Content>
        <Footer />
      </BrowserRouter>
    </Layout>
  );
};

export default App;
