import { Switch, Route, withRouter } from "react-router-dom";
import React, { Component } from 'react'
import MyNav from './components/MyNav'
import axios from 'axios'
import TodoList from "./components/SpotifyList";
import TodoDetail from "./components/SpotifyDetail";
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import {API_URL} from './config'
import NotFound from "./components/NotFound";
import ChatBot from "./components/ChatBot";
import './App.css'
import  'bootstrap/dist/css/bootstrap.min.css';

//TEST PAGES 
import TestEmmy from './components/TestEmmy'
import TestSal from './components/TestSal'


class App extends Component {

  state = {
    spotify: [],
    user: null,
    myError: null, 
    fetchingUser: true, 
  }

 
  async componentDidMount(){
    try {
      // fetch all the initial todos to show on the home page
        let response = await axios.get(`${API_URL}/api/spotify`, {withCredentials: true})
        console.log(response.data)
        this.setState({
          spotify: response.data
        })


     // fetch the loggedInUser if present
        let userResponse = await axios.get(`${API_URL}/api/user`, {withCredentials: true})
        this.setState({
          user: userResponse.data,
          fetchingUser: false,
        })

    }  
    catch(err){
      console.log('Spotify fetch failed', err)
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
  

    

    if (this.state.fetchingUser) {
      return <p>Loading . . . </p>
    }


    // ❗
   
    return (
      <div >
          <MyNav user={this.state.user} onLogOut={this.handleLogOut} />

          <ChatBot />
        
          <Switch>
          
              
              <Route  path="/signin"  render={(routeProps) => {
                return  <SignIn  error={this.state.myError} onSignIn={this.handleSignIn} {...routeProps}  />
              }}/>

              <Route  path="/signup"  render={(routeProps) => {
                return  <SignUp onSignUp={this.handleSignUp} {...routeProps}  />
              }}/>
              
              <Route component={NotFound} />

              <Route  path="/testsal"  render={(routeProps) => {
                return  <TestSal   />
              }}/>

              <Route  path="/testemmy"  render={(routeProps) => {
                return  <TestEmmy error={this.state.myError} {...routeProps}  />
              }}/>


          </Switch>
      </div>
    );
  }
}

export default withRouter(App);