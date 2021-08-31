import React from "react"
import PropTypes from "prop-types"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


class App extends React.Component {
  render () {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
    <React.Fragment>
      { logged_in &&
        <a href={sign_out_route }>Sign Out</a>  
      }
      { !logged_in &&
        <a href={ sign_in_route }>Sign In</a>
      }
    </React.Fragment>
    );
  }
}

export default App
