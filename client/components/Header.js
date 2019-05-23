import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';

 const Header = (props) => {
  return (
    <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['company']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item
          key="company"
          onClick={() => props.history.push('/company')}
        >
          Company
        </Menu.Item>
        <Menu.Item
          key="groups"
          onClick={() => props.history.push('/groups')}
        >
          Groups
        </Menu.Item>
        <Menu.Item
          key="roles"
          onClick={() => props.history.push('/roles')}
        >
          Roles
        </Menu.Item>
        <Menu.Item
          key="employees"
          onClick={() => props.history.push('/employees')}
        >
          Employees
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default withRouter(Header);