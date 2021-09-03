import React, { Component } from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class TaskIndex extends Component {
  render() {
    return (
      <div className="page-body">
        <h3>Task Board</h3>
        <br />
        <br />
        <Row bsPrefix="cards">
            {this.props.tasks && this.props.tasks.map(task => {
              return (
                <Card key={task.id}>
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