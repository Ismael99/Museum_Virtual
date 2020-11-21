import React, {Fragment} from 'react'
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import Home from '../components/Home'
import logo from '../images/logo_transparent.png'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'
import './NavbarContainer.css'

const NavbarContainer = () => {
      // RouteMatch
        const match = useRouteMatch();

    return (
            <Fragment>

                <Navbar collapseOnSelect expand="lg" className='Navbar'>
                    <Link>
                       <img className='logo' src={logo} alt='logo'  />
                    </Link>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="#features">Features</Nav.Link>
                      <Nav.Link href="#pricing">Pricing</Nav.Link>
                      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Nav>
                      <Nav.Link href="#deets">More deets</Nav.Link>
                      <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
              </Navbar>
                <Switch>
                  {/*<!-- Es necesario que la ruta padre contenga un exact path --> */}
                  <Route exact path={match.path}>
                    <Home />
                  </Route>
                </Switch>
            </Fragment>
    )
}

export default NavbarContainer
