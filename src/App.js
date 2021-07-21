import { Switch, Route, withRouter } from "react-router-dom";
import React, { Component } from 'react'
import MyNav from './components/MyNav'
import axios from 'axios'


import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import {API_URL} from './config'


class App extends Component {

  // Make your /api/todos requst here
  async componentDidMount(){
    try {
      

     // fetch the loggedInUser if present
        let userResponse = await axios.get(`${API_URL}/api/user`, {withCredentials: true})
        this.setState({
          user: userResponse.data,
          fetchingUser: false,
        })

    }  
    catch(err){
      console.log('Todo fetch failed', err)
      this.setState({
        fetchingUser: false,
      })
    }
  }

  
  handleSignUp = async (event) => {
    event.preventDefault()
    // event.target here is a `<form>` node
    const {username, email, password} = event.target

    // our new user info
    let newUser = {
      username: username.value,
      email: email.value,
      password: password.value
    }

    // make a POST signup request to the server
    try {
      await axios.post(`${API_URL}/api/signup`, newUser, {withCredentials: true})
      this.props.history.push('/')
    }
    catch(err) {
      console.log('Signup failed', err)
    }
  }

  handleSignIn = async (event) => {
    event.preventDefault()
    console.log('Sign in works!!!! Yippeeee')
     // event.target here is a `<form>` node
     const { email, password} = event.target

     // our new user info
     let myUser = {
       email: email.value,
       password: password.value
     }
 
     // make a POST signin request to the server
     try {
       let response = await axios.post(`${API_URL}/api/signin`, myUser, {withCredentials: true})
       this.setState({
         user: response.data
       }, () => {

          this.props.history.push('/')
       })
       
     }
     catch(err) {
       console.log('Signup failed', err.response.data)
       // axios vides us the server response in `response.data`
       // we put `.error` because our server gives us an object with an `error` key  
       this.setState({
          myError:  err.response.data.error
       })
     }
  }


  handleLogOut = async () => {
    try {

      await axios.post(`${API_URL}/api/logout`, {}, {withCredentials: true})
      // clearing the user once they logout
      this.setState({
        user: null
      } , () => {
        this.props.history.push('/')
      })

    }
    catch(err) {
      console.log('Logout failed', err)
    }
  }

  render() {
    console.log('App props', this.props)
    const promise = loadStripe("pk_test_f3duw0VsAEM2TJFMtWQ90QAT");


    if (this.state.fetchingUser) {
      return <p>Loading . . . </p>
    }


    return (
      <div>
        <Elements stripe={promise}>
          <CheckoutForm />
        </Elements>
      </div>
    )

    // return (
    //   <div >
    //       <MyNav user={this.state.user} onLogOut={this.handleLogOut} />
    //       <MyCalendar />
    //       <ChatBot />
    //       {/* <MyMap /> */}
    //       <Switch>
    //           <Route exact path={'/'}  render={() => {
    //             return <TodoList  todos={this.state.todos} />
    //           }} />
    //           <Route exact path={'/todo/:todoId'} render={(routeProps) => {
    //             return <TodoDetail user={this.state.user} {...routeProps} onDelete={this.handleDeleteTodo} />
    //           }} />
    //           <Route path={'/todo/:todoId/edit'} render={(routeProps) => {
    //             return <EditForm {...routeProps}  onEdit={this.handleEditTodo} />
    //           }} />
    //           <Route path={'/add-form'} render={() => {
    //              return <AddForm user={this.state.user} onAdd={this.handleAddTodo}/>
    //           }} />
    //           <Route  path="/signin"  render={(routeProps) => {
    //             return  <SignIn  error={this.state.myError} onSignIn={this.handleSignIn} {...routeProps}  />
    //           }}/>
    //           <Route  path="/signup"  render={(routeProps) => {
    //             return  <SignUp onSignUp={this.handleSignUp} {...routeProps}  />
    //           }}/>
    //           <Route component={NotFound} />
    //       </Switch>
    //   </div>
    // );
  }
}

export default withRouter(App);
