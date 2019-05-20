import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import CompanyInfo from '../components/Company/CompanyInfo';
import GroupsList from '../components/Groups/GroupsList';
import RolesList from '../components/Roles/RolesList';
import EmployeesList from '../components/Employees/EmployeesList';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={CompanyInfo} />
          <Route path="/company" exact component={CompanyInfo} />
          <Route path="/groups" exact component={GroupsList} />
          <Route path="/roles" exact component={RolesList} />
          <Route path="/employees" exact component={EmployeesList} />
        </Switch>
      </BrowserRouter>
      <h6>Human Resource App  0.1.0</h6>
    </div>
  );
}

export default App;