import React, { Component } from 'react'
import { Button, Card, CardTitle, Col, Row, Jumbotron } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import icon3 from '../components/assets/icon3.png'
import icon4 from '../components/assets/icon4.png'
import icon5 from '../components/assets/icon5.png'
import icon6 from '../components/assets/icon6.png'
import icon7 from '../components/assets/icon7.png'
import icon8 from '../components/assets/icon8.png'


class TaskIndex extends Component {
  render() {
    return (
      <div className="page-body">
        <Jumbotron>
            <h1 className="display-3">Welcome to the Village</h1>
                <br></br>
                <p className="lead">Here you can view all tasks currently posted by Villagers</p>
                        <img id="icon" className="animated bounceIn" src={icon8}></img>
                        <img id="icon" className="animated bounceIn" src={icon3}></img>
                        <img id="icon" className="animated bounceIn" src={icon4}></img>
                        <img id="icon" className="animated bounceIn" src={icon5}></img>
                        <img id="icon" className="animated bounceIn" src={icon6}></img>
                        <img id="icon" className="animated bounceIn" src={icon7}></img>
                        <br></br>
                <hr className="my-2" />
                    <p className="lead">
                        <br></br>
                        <NavLink to={'/'}>
                        <Button color="primary">Home</Button>
                        </NavLink>
                        </p>
                    </Jumbotron>
        <br />
        <Row>
            {this.props.tasks && this.props.tasks.map(task => {
              return (
                <Card className="theCards" key={task.id}>
                  <div>
                    {task.title}
                  </div>
                  <div>
                    {task.description}
                  </div>
                  <br />
                  <NavLink to={`/taskShow/${task.id}`}>
                    <Button>
                      More Info
                    </Button>
                  </NavLink>
                </Card>
              )
            })}
        </Row>
      </div>
    )
  }
}
export default TaskIndex