import React, { Component } from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'

class TaskShow extends Component {
  render() {
    const { task } = this.props
    console.log(task)
    return (
      <div className="page-body">
        <h3>More information:</h3>
        <br />
        <div className="cards">
          {task &&
            <div className="card">
              <h5>{task.title}</h5>
              <h5>{task.description}</h5>
              <h5>{task.category}</h5>
              <h5>{task.urgency}</h5>
              <h5>Time commitment:{task.hours}</h5>
            </div>
          }
        </div>
      </div>
    )
  }
}
export default TaskShow