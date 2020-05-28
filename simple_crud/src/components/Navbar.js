import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,NavbarBrand} from 'reactstrap';

export const NavBar = () => {
  return (
    <div>
      <Navbar color="info" light expand="md">
        <NavbarBrand href="/">Crud app</NavbarBrand>
      </Navbar>
    </div>
  )
}
