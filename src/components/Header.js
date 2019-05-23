import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';

 const Header = (props) => {
  return (

    <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1" onClick={() => props.history.push('/company')}>Company</Menu.Item>
        <Menu.Item key="2" onClick={() => props.history.push('/groups')}>Groups</Menu.Item>
        <Menu.Item key="3" onClick={() => props.history.push('/roles')}>Roles</Menu.Item>
        <Menu.Item key="4" onClick={() => props.history.push('/employees')}>Employees</Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default withRouter(Header);