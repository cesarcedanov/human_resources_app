import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Header = () => {
  // Declare a new state variable to handle the active Item
  const [activeItem, setActiveItem] = useState('employee');


  return (
    <Menu >
      <Link to="/company">
        <Menu.Item 
          name="company"
          onClick={() => setActiveItem("company")}
          active={activeItem === "company"}
        />
      </Link>
      <Link to="groups">
        <Menu.Item 
          name="groups"
          onClick={() => setActiveItem("groups")}
          active={activeItem === "groups"}
        />
      </Link>
      <Link to="roles">
        <Menu.Item 
          name="roles"
          onClick={() => setActiveItem("roles")}
          active={activeItem === "roles"}
        />
      </Link>
      <Link to="/employees">
        <Menu.Item 
          name="employees"
          onClick={() => setActiveItem("employees")}
          active={activeItem === "employees"}
        />
      </Link>
    </Menu>
  );
};

export default Header;