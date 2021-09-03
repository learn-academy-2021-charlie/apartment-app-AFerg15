import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-white.png'

class Header extends Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <header>
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo"/>
        </NavLink>
        <div className="nav-bar">
          
            <NavLink to="/TaskIndex" className="nav-link" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'white', textDecoration: 'none'}}>Task Board</NavLink>
         
            <NavLink to="/TaskNew" className="nav-link" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'white', textDecoration: 'none'}}>Create a Task</NavLink>
         
            {logged_in &&
              <a href={sign_out_route} className="nav-link" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'white', textDecoration: 'none'}}>Sign Out</a>
            }
            {!logged_in &&
              <a href={sign_in_route} className="nav-link" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'white', textDecoration: 'none'}}>Sign In</a>
            }
        
        </div>
      </header>
    )
  }
}
export default Header

