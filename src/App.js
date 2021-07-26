import { Switch, Route, withRouter } from "react-router-dom";
import React, { Component } from "react";
import MyNav from "./components/MyNav";
import axios from "axios";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { API_URL } from "./config";
import NotFound from "./components/NotFound";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
//import { Paper, Grid } from '@material-ui/core';

//Spotify Search Engine
import Tracks from "./components/SpotifyApi/Tracks";
import Albums from "./components/SpotifyApi/Albums";
import ArtistSearch from "./components/SpotifyApi/ArtistSearch";

//TEST PAGES
import TestEmmy from "./components/TestEmmy";
import Random from "./components/SpotifyApi/Random";
import Profile from "./components/Profile";
import Selekta from "./components/Selekta";
import SpotifyLogin from "./components/SpotifyLogin/SpotifyLogin";
import MinimumDistanceSlider from './components/Individual/Slider'

class App extends Component {
        state = {
          user: null,
          myError: null,
          fetchingUser: true,
          setValue1: [0.1, 0.9],
          setValue2: [0.1, 0.9],
          SetValue3: [0.1, 0.9],
          setValue4: [0.1, 0.9],
        };

        async componentDidMount() {
          try {
            // fetch all the initial todos to show on the home page
            let response = await axios.get(`${API_URL}/api/todos`, {
              withCredentials: true,
            });
            console.log(response.data);
            this.setState({
              //todos: response.data
            });

            // fetch the loggedInUser if present
            let userResponse = await axios.get(`${API_URL}/api/user`, {
              withCredentials: true,
            });
            this.setState({
              user: userResponse.data,
              fetchingUser: false,
            });
          } catch (err) {
            console.log("Spotify fetch failed", err);
            this.setState({
              fetchingUser: false,
            });
          }
        }

        handleCredentials = async (event) => {
          event.preventDefault();
          //const spotify = Credentials();
          console.log("RENDERING APP.JS");
        };

        handleSignUp = async (event) => {
          event.preventDefault();
          // event.target here is a `<form>` node
          const { username, email, password } = event.target;

          // our new user info
          let newUser = {
            username: username.value,
            email: email.value,
            password: password.value,
          };

          // make a POST signup request to the server
          try {
            await axios.post(`${API_URL}/api/signup`, newUser, {
              withCredentials: true,
            });
            this.props.history.push("/");
          } catch (err) {
            console.log("Signup failed", err);
          }
        };

        componentDidUpdate() {
          console.log("App was updated");
        }

        handleSignIn = async (event) => {
          event.preventDefault();
          console.log("Sign in works!!!! Yippeeee");
          // event.target here is a `<form>` node
          const { email, password } = event.target;

          // our new user info
          let myUser = {
            email: email.value,
            password: password.value,
          };

          // make a POST signin request to the server
          try {
            let response = await axios.post(`${API_URL}/api/signin`, myUser, {
              withCredentials: true,
            });
            this.setState(
              {
                user: response.data,
              },
              () => {
                this.props.history.push("/");
              }
            );
          } catch (err) {
            console.log("Signup failed", err);
            // axios vides us the server response in `response.data`
            // we put `.error` because our server gives us an object with an `error` key
            this.setState({
              myError: err.response.data.error,
            });
          }
        };

        handleLogOut = async () => {
          try {
            await axios.post(`${API_URL}/api/logout`, {}, { withCredentials: true });
            // clearing the user once they logout
            this.setState(
              {
                user: null,
              },
              () => {
                this.props.history.push("/");
              }
            );
          } catch (err) {
            console.log("Logout failed", err);
          }
        };

        // SELEKTA HANDELS
        handleSelekting = () => {
          if (this.state.user) {
          } else {
            this.props.history.push("/signin");
          }
          console.log("On Selekting");
        };
        

        //SLIDER FUNCTIONS 
        // names of these will be  used to pass down the props to the CHILD COMPONENT 

        handleChange1 = (value) => {
          //updating setValue1
          this.setState({setValue1:value})
          console.log("On setValue1");
        }

        handleChange2 = (value) => {
          //updating setValue2
          this.setState({setValue2:value})
          
          console.log("On setValue2");
        }


        handleChange3 = (value) => {
          //updating setValue3
          this.setState({setValue3:value})
          console.log("On setValue3");
        }


        handleChange4 = (value) => {
          //updating setValue4
          this.setState({setValue4:value})
          console.log("On setValue4");
        }


        render() {
          console.log("App props", this.props);

          if (this.state.fetchingUser) {
            return <p>Loading . . . </p>;
          }

   

          return (
            <div>
              <MyNav user={this.state.user} onLogOut={this.handleLogOut} />

              <Switch>
            
                <Route
                  exact
                  path={"/artist-search"}
                  render={(routeProps) => {
                    return <ArtistSearch />;
                  }}
                />

                <Route
                  exact
                  path={"/albums/artistId"}
                  render={() => {
                    return <Albums />;
                  }}
                />

                <Route
                  exact
                  path={"/tracks/:albumId"}
                  render={() => {
                    return <Tracks />;
                  }}
                />

                {/* SpotifyApi end routes */}

                <Route
                  exact
                  path={"/"}
                  render={() => { 
                    // "onchange1"  not a ket work a variable name can be anything is being passed down to the  CHILD 
                    // "this.handleChange"  Needs to to be the name of the function above 
                    return <Selekta onSelekting={this.handleSelekting} onChange1={this.handleChange1}
                    onChange2={this.handleChange2} onChange3={this.handleChange3} onChange4={this.handleChange4}  />;
                  }}
                />

                <Route
                  path="/signin"
                  render={(routeProps) => {
                    return (
                      <SignIn
                        error={this.state.myError}
                        onSignIn={this.handleSignIn}
                        {...routeProps}
                      />
                    );
                  }}
                />

                <Route
                  path="/signup"
                  render={(routeProps) => {
                    return <SignUp onSignUp={this.handleSignUp} {...routeProps} />;
                  }}
                />

                <Route
                  path="/testemmy"
                  render={(routeProps) => {
                    return <TestEmmy error={this.state.myError} {...routeProps} />;
                  }}
                />

                <Route exact path="/random" component={Random} />

                <Route
                  path="/search"
                  render={(routeProps) => {
                    return <Search error={this.state.myError} {...routeProps} />;
                  }}
                />

                <Route
                  path="/profile"
                  render={(routeProps) => {
                    return <Profile error={this.state.myError} {...routeProps} />;
                  }}
                />

                <Route
                  path="/spotifylogin"
                  render={(routeProps) => {
                    return (
                      <SpotifyLogin error={this.state.myError} {...routeProps} />
                    );
                  }}
                />

                <Route component={NotFound} />
              </Switch>
            </div>
          );
        }
}

export default withRouter(App);
