import React, { Component } from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from  'react-router-dom'
import bg from '../components/assets/bg.png'

class TaskShow extends Component {
  render() {
    const { task } = this.props
    console.log(task)
    return (
      <div className="page-body2">
        <br />
        <div className="cards">
          {task &&
            <div className="card">
              <h5 className="showTitle">{task.title}</h5>
              <h5>{task.description}</h5>
              <h5>Category: {task.category}</h5>
              <h5>Urgency: {task.urgency}</h5>
              <h5>Time commitment: {task.hours}</h5>
            </div>
          }
        </div>
        <div className="buttonsDiv">
        <NavLink
          to={`/taskedit/${
            this.props.task && this.props.task.id
          }`}
        >
          <Button>Edit Task</Button>
        </NavLink>
        <NavLink to={"/taskindex"}>
          <Button onClick={() => this.props.deleteTask(task.id)}>
            Delete Task
          </Button>
        </NavLink>
        <NavLink to={"/taskindex"}>
          <Button>Back</Button>
        </NavLink>
        </div>
      </div>
    )
  }
}
export default TaskShow