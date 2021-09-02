import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Home from '../pages/Home'
import TaskIndex from "../pages/TaskIndex"
import TaskShow from "../pages/TaskShow"
import TaskNew from "../pages/TaskNew"
import TaskEdit from "../pages/TaskEdit"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: []
    }
  }
  componentDidMount(){
    this.readTask()
  }
  readTask = () => {
    fetch("/tasks")
    .then(response => response.json())
    .then(payload => this.setState({tasks: payload}))
    .catch(errors => console.log("index errors:", errors))
  }
  
  createTask = (newTask) => {
    console.log(JSON.stringify(newTask))
   fetch("/tasks", {
     body: JSON.stringify(newTask),
     headers: {
       "Content-Type": "application/json"
     },
     method: "POST"
   })
   .then(response => response.json())
   .then(payload => this.readTask())
   .catch(errors => console.log("Task create errors:", errors))
  }
  updateTask = (editTask, id) => {
    fetch(`/tasks/${id}`, {
      body: JSON.stringify(editTask),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => this.readTask())
    .catch(errors => console.log("Task update errors:", errors))
  }

  deleteTask = (id) => {
    fetch(`/tasks/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
    .then((response) => response.json())
    .then((payload) => this.readTask())
    .catch((errors) => console.log("Task delete fetch errors:", errors))
  }

  render() {
      const {
        logged_in,
        current_user,
        new_user_route,
        sign_in_route,
        sign_out_route
      } = this.props
      return (
        <Router>
          <Header
            logged_in={logged_in}
            sign_in_route={sign_in_route}
            sign_out_route={sign_out_route}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/TaskIndex" render={(props) => {
              return <TaskIndex tasks={this.state.tasks} />
            }}/>
            <Route path={'/taskedit/:id'} render={(props) => {
            let id = props.match.params.id
            let task = this.state.tasks.find(task => task.id === +id)
            return <TaskEdit updateTask = {this.updateTask} task={task} />
          }} />
            <Route path="/TaskShow/:id" render={ (props) => {
              let id = +props.match.params.id
              let task = this.state.tasks.find(a => a.id === id)
              return <TaskShow task={task} />
            }}/>
            <Route path="/TaskNew" render={(props) => <TaskNew createTask = {this.createTask}/>} />
            </Switch>
        </Router>
      )
    }
  }
export default App
