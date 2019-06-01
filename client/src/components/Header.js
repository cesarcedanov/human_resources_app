import React from "react";
import { withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";

const Header = props => {
  let selectedItem = props.location.pathname.split("/")[1];
  return (
    <Layout.Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[selectedItem ? selectedItem : "home"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="home" onClick={() => props.history.push("/")}>
          Home
        </Menu.Item>
        <Menu.Item key="company" onClick={() => props.history.push("/company")}>
          Company
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default withRouter(Header);
