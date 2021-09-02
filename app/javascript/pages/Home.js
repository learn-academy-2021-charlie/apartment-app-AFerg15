import React, { Component } from 'react';
import {Button, Jumbotron} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import icon1 from '../components/assets/icon1.png'
import icon2 from '../components/assets/icon2.png'
import icon3 from '../components/assets/icon3.png'
import icon4 from '../components/assets/icon4.png'
import icon5 from '../components/assets/icon5.png'
import icon6 from '../components/assets/icon6.png'
import icon7 from '../components/assets/icon7.png'
import icon8 from '../components/assets/icon8.png'


class Home extends Component {
    render() {
        return (
            <div className="page-body">
                <div>
                    <Jumbotron>
                        <h1 className="display-3">Existing is a lot of work</h1>
                        <br></br>
                        <p className="lead">Focus on what's most important to you. For the everything else - there's Village.</p>
                        <img id="icon" className="animated bounceIn" src={icon8}></img>
                        <img id="icon" className="animated bounceIn" src={icon3}></img>
                        <img id="icon" className="animated bounceIn" src={icon4}></img>
                        <img id="icon" className="animated bounceIn" src={icon5}></img>
                        <img id="icon" className="animated bounceIn" src={icon6}></img>
                        <img id="icon" className="animated bounceIn" src={icon7}></img>
                        <br></br>
                        <hr className="my-2" />
                        <p>Do you have a list of tasks you don't have the time, mental energy or resources to complete? By adding your task to the Village board, you can join a community of people who want to help! Add, update and trade tasks with your Village.</p>
                        <p className="lead">
                        <NavLink to={'/users/sign_up'}>
                        <Button color="primary">Sign Up</Button>
                        </NavLink>
                        </p>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}

export default Home;