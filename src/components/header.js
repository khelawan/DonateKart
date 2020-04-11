import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar } from 'react-bootstrap'


const Header = () => {
    return(
        <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          D Kart
        </Navbar.Brand>
      </Navbar>
      <br/>
      </div>
      
    )

}

export default Header;