import React, {Component } from 'react';
import { Button, Form, FormFeedback, FormText, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class TaskNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        title: "",
        description: "",
        category: "",
        urgency: "",
        hours: "",
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }

  handleSubmit = () => {
    this.props.createTask(this.state.form)
    this.setState({submitted: true})
  }

    render() {
      return (
        <>
        <div className="page-body2">
            
            <Form className="form">
              <FormGroup>
                <Label className="label" for="title">Title</Label>
                    <Input type="text" name="title" 
                    onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label className="label" for="category">Category</Label>
                    <Input type="text" name="category"
                    onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="description" className="label">Description</Label>
                    <Input type="text" name="description"
                    onChange={this.handleChange} />
                <FormFeedback>You will not be able to see this</FormFeedback>
                <FormText className="formtext">Must be at least 10 characters.</FormText>
              </FormGroup>
              <FormGroup>
                <Label className="label" for="urgency">Urgency</Label>
                    <Input type="text" name="urgency"
                    onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label className="label" for="hours">Time Commitment</Label>
                    <Input type="text" name="hours"
                    onChange={this.handleChange}/>
              </FormGroup>
              <br></br>
                <Button name="submit" onClick={this.handleSubmit}>Add New Task</Button>
            </Form>
           </div> 
            {this.state.submitted && <Redirect to="/TaskIndex" />}
        </>
      )
    }
  }
  
  
  export default TaskNew;