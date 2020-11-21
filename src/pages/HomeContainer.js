
import React, {Fragment} from 'react'
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import Home from '../components/Home'
import logo from '../images/logo_transparent.png'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'
import './NavbarContainer.css'

const HomeContainer = () => {
      // RouteMatch
        const match = useRouteMatch();

    return (
            <Fragment>

                <Navbar collapseOnSelect expand="lg" className='Navbar py-0'>
                    <Link to='/' className=' logo-nav py-0 animated rubberBand'>
                       <img className='logo' src={logo} alt='logo'  />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='py-0'>
                    <Nav className="mr-auto py-0">
                    <Link className='btn-navbar Link-nav my-auto  mx-1' to="/"><h5>Home</h5></Link>
                    <h5>
                        <NavDropdown className='Link-nav btn-navbar mx-1' title="Artistas" id="collasible-nav-dropdown">
                            <NavDropdown.Item className='text-center item-bg'>
                                <Link className='item' to="/museum/autor">Actor Name</Link><br/>
                            </NavDropdown.Item>
                            <NavDropdown.Item className='text-center item-bg'>
                                <Link className='item' to="/museum/autor">Actor Name</Link><br/>
                            </NavDropdown.Item>
                            <NavDropdown.Item className='text-center item-bg'>
                                <Link className='item' to="/museum/autor">Actor Name</Link><br/>
                            </NavDropdown.Item>
                            <NavDropdown.Item className='text-center item-bg'>
                                <Link className='item' to="/museum/autor">Actor Name</Link><br/>
                            </NavDropdown.Item>
                            <NavDropdown.Item className='text-center item-bg'>
                                <Link className='item' to="/museum/autor">Actor Name</Link><br/>
                            </NavDropdown.Item>
                            <NavDropdown.Item className='text-center item-bg'>
                                <Link className='item' to="/museum/autor">Actor Name</Link><br/>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </h5>
                    </Nav>
                  </Navbar.Collapse>
              </Navbar>
                <Switch>
                  {/*<!-- Es necesario que la ruta padre contenga un exact path --> */}
                    <Route exact path={match.path}>
                        <Home/>
                    </Route>
              </Switch>
              <footer className="footer mt-5 text-white">
                  <div className="row">
                      <div className="col-6">
                            <img src={logo} className='logo-footer' alt="logo" />
                      </div>
                      <div className="col-6 text-right my-auto">
                        <div className="content-footer">
                            <h3><strong className="sub-title">Museo de Artes</strong></h3>
                          <h4>copyright&copy;</h4>
                        </div>
                      </div>
                  </div>
                  </footer>

            </Fragment>
    )
}

export default HomeContainer
