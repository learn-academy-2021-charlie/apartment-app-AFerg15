import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

      return (
        <>
          <Navbar color="faded" light>
            
          <NavbarBrand className='header-style mx-auto' href="/" ><img src={logo} alt="logo for ACNH Tinder" className="acnh-logo"/></NavbarBrand>
              <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                  <Nav navbar>
                  <NavItem>
                        <NavLink href="/animalindex">See all Villagers</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/animalnew">New Villager</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
                
          </Navbar>
        </>
      )
  }
export default Header