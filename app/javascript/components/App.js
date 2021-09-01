import React, { Component } from "react"
import Header from './components/Header'
import Home from '../pages/Home'
import TaskIndex from "../pages/TaskIndex"
import TaskShow from "../pages/TaskShow"
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
            <Route path="/TaskShow/:id" render={ (props) => {
              let id = +props.match.params.id
              let task = this.state.tasks.find(a => a.id === id)
              return <TaskShow task={task} />
            }}/>
          </Switch>
        </Router>
      )
    }
  }
export default App
