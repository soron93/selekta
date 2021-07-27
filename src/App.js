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


//TEST PAGES
import TestEmmy from "./components/TestEmmy";
import Random from "./components/SpotifyApi/Random";
import Profile from "./components/Profile";
import Selekta from "./components/Selekta";
import SpotifyLogin from "./components/SpotifyLogin/SpotifyLogin";
import SliderSelekta from './components/Individual/SliderSelekta'

class App extends Component {
        state = {
          user: null,
          myError: null,
          fetchingUser: true,
          setValue1: [0.1, 0.9],
          setValue2: [0.1, 0.9],
          setValue3: [0.1, 0.9],
          setValue4: [0.1, 0.9],
          tracks:[],
        };

        async componentDidMount() {
          try {
          

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
            let audio_features = {
              min_danceability:this.state.setValue1[0],
              max_danceability:this.state.setValue1[1],
              min_acousticness:this.state.setValue2[0],
              max_acousticness:this.state.setValue2[1],
              min_speechiness:this.state.setValue3[0],
              max_speechiness:this.state.setValue3[1],
              min_popularity:this.state.setValue4[0],
              max_popularity:this.state.setValue4[1]
            }
            axios.post( `${API_URL}/api/generate-playlist`, audio_features, { withCredentials: true } )
            .then((response) => {
              console.log(response.data)
              this.setState({tracks:response.data.tracks})
            })
            .catch(() => {
              console.log("post fail");
            })

            
          } else {
            this.props.history.push("/signin");
          }
          console.log("On Selekting");
        };
        

        handleSave = () => {
          //updating setValue1
          
          console.log("On Save");
        }


        //SLIDER FUNCTIONS 
        // names of these will be  used to pass down the props to the CHILD COMPONENT 

        handleChange1 = (value) => {
          //updating setValue1
          this.setState({setValue1:value})
          console.log("On setValue1", value);
        }

        handleChange2 = (value) => {
          //updating setValue2
          this.setState({setValue2:value})
          
          console.log("On setValue2", value);
        }


        handleChange3 = (value) => {
          //updating setValue3
          this.setState({setValue3:value})
          console.log("On setValue3", value);
        }


        handleChange4 = (value) => {
          //updating setValue4
          this.setState({setValue4:value})
          console.log("On setValue4", value);
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
                  path={"/"}
                  render={() => { 
                    // "onchange1"  not a ket work a variable name can be anything is being passed down to the  CHILD 
                    // "this.handleChange"  Needs to to be the name of the function above 
                    return <Selekta onSave={this.handleSave} onSelekting={this.handleSelekting} onChange1={this.handleChange1}
                    onChange2={this.handleChange2} onChange3={this.handleChange3} onChange4={this.handleChange4} tracks={this.state.tracks}  />;
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
