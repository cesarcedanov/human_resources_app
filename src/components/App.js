import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Header from './Header';
import Footer from './Footer';

import CompanyInfo from '../components/Company/CompanyInfo';
import GroupsList from '../components/Groups/GroupsList';
import RolesList from '../components/Roles/RolesList';
import EmployeesList from '../components/Employees/EmployeesList';

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Header />
        <Layout.Content style={{ background: 'white', padding: 50, marginTop: 64}}>
          <Switch>
            <Route path="/" exact component={CompanyInfo} />
            <Route path="/company" exact component={CompanyInfo} />
            <Route path="/groups" exact component={GroupsList} />
            <Route path="/roles" exact component={RolesList} />
            <Route path="/employees" exact component={EmployeesList} />
          </Switch>
        </Layout.Content>
        <Footer />
      </BrowserRouter>
    </Layout>
  );
};

export default App;