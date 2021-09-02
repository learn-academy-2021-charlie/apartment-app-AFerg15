import React, {Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class TaskEdit extends Component {
    constructor(props){
      super(props)
      this.state = {
        form: {
            title: this.props.title ? this.props.task.title : "",
            description: this.props.description ? this.props.task.description : "",
            category: this.props.category ? this.props.task.category : "",
            urgency: this.props.urgency ? this.props.task.urgency : "",
            hours: this.props.hours ? this.props.task.hours : "",
        },
        submitted: false
      }
    }

    handleChange = (e) => {
      let { form } = this.state
      form[e.target.name] = e.target.value
      this.setState({form: form})
    }
    handleSubmit = (e) => {
      this.props.updateTask(this.state.form, this.props.task.id)
      this.setState({submitted: true})
    } 

    render() {
      return (
        <>
        <div className="page-body2">  
            <Form className="form">
              <FormGroup>
                <Label className="label">Title</Label>
                <Input type="text" name="title"
                  onChange={this.handleChange}
                  value={this.state.form.title}
                />
              </FormGroup>
              <FormGroup>
                <Label className="label">Description</Label>
                <Input type="text" name="description"
                onChange={this.handleChange}
                value={this.state.form.description}
                />
              </FormGroup>
              <FormGroup>
                <Label className="label">Category</Label>
                <Input type="text" name="category"
                onChange={this.handleChange}
                value={this.state.form.category}
                />
              </FormGroup>
              <FormGroup>
                <Label className="label">Urgency</Label>
                <Input type="text" name="urgency"
                onChange={this.handleChange}
                value={this.state.form.urgency}
                />
              </FormGroup>
              <FormGroup>
                <Label className="label">Hours</Label>
                <Input type="text" name="hours"
                onChange={this.handleChange}
                value={this.state.form.hours}
                />
              </FormGroup>
              <br></br>
            <Button name='Submit' onClick={this.handleSubmit}>
                Edit Character
            </Button>
            </Form>
            </div>
              { this.state.submitted && <Redirect to={`/taskshow/${this.props.task.id}` } /> }
        </>
      )
    }
  }
  

  export default TaskEdit;