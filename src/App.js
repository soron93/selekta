import { Switch, Route, withRouter } from "react-router-dom";
import React, { Component } from "react";
import MyNav from "./components/MyNav";
import axios from "axios";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { API_URL } from "./config";
import NotFound from "./components/NotFound";
import "./App.css";
import Profile from "./components/Profile";
import Selekta from "./components/Selekta";
import SpotifyLogin from "./components/SpotifyLogin/SpotifyLogin";
import PlaylistDetail from "./components/PlaylistDetail";
import EditPlaylist from "./components/EditPlaylist";

class App extends Component {
        state = {
          crud:[],
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
            // fetch all the initial crud to show on the home page
            let response = await axios.get(`${API_URL}/api/crud`, {
            withCredentials: true,});
            console.log(response.data);
            this.setState({
              crud: response.data
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
            console.log("Crud fetch failed", err);
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

        

        handleAddCrud = async (event) => {

          event.preventDefault()
      
          //First upload the image to cloudinary
          // then send the image url to our /api/create request
          
          // How to grab the image from our input 
          console.log(event.target.myImage.files[0] )
      
          let formData = new FormData()
          formData.append('imageUrl', event.target.myImage.files[0])
      
          let imgResponse = await axios.post(`${API_URL}/api/upload`, formData)
          console.log(imgResponse)
      
      
          let newCrud = {
            name: event.target.name.value,
            description: event.target.description.value,
            completed: false,
            image: imgResponse.data.image
          }
      
          // Pass the data in POST requests as the second parameter
          // create the crud in the DB
          axios.post(`${API_URL}/api/create`, newCrud, {withCredentials: true})
            .then((response) => {
                // Also update the state locally
                // use the newly created to from your DB and not the local todo that we created above.
      
                this.setState({
                  crud: [response.data, ...this.state.cruds]
                }, () => {
                    // to do something synchronous with the setState
      
                    // redirects the app to a certain url
                    // we're using the history push method to redirect it to any url we want
                    this.props.history.push('/')
                })
            })
            .catch(() => {
              console.log('Adding crud failed')
            })
      
        }

        handleDeleteCrud = (crudId) => {
          // delete the todo from the DB
          axios.delete(`${API_URL}/api/cruds/${crudId}`, {withCredentials: true})
            .then(() => {
              // and then also filter and remove the todo from the local state
              let filteredCruds = this.state.cruds.filter((crud) => {
                return crud._id !== crudId
              })
      
              //update the state and redirect synchronously
              this.setState({
                cruds: filteredCruds
              } , () => {
                this.props.history.push('/')
              })
      
            })
            .catch(() => {
              console.log('Delete failed')
            })
        }


        handleEditCrud = (event, crud) => {
          event.preventDefault()
      
          // pass a second parameter to the patch for sending info to your server inside req.body
          axios.patch(`${API_URL}/api/cruds/${crud._id}`, crud, {withCredentials: true})
            .then(() => {
                // also update your local state here and redirect to home page
                // mapping over all the todos and updating the one that was edited
                let updatedCruds = this.state.crud.map((singleCrud) => {
                    if (singleCrud._id === crud._id) {
                      singleCrud.name = crud.name
                      singleCrud.description = crud.description
                    } 
                  return singleCrud
                })
      
                this.setState({
                  cruds: updatedCruds
                }, () => {
                   this.props.history.push('/')
                })
            })
            .catch(() => {
                console.log('Edit failed')
            })
        }


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


          
          console.log("On Selekting");
        };


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
            
        

                <Route exact path={"/"} render={(routeProps) => { 
                    // "onchange1"  not a ket work a variable name can be anything is being passed down to the  CHILD 
                    // "this.handleChange"  Needs to to be the name of the function above 
                    return <Selekta onSelekting={this.handleSelekting} onChange1={this.handleChange1}
                    onChange2={this.handleChange2} onChange3={this.handleChange3} onChange4={this.handleChange4} tracks={this.state.tracks} {...routeProps} 
                    user={this.state.user}/>;
                  }}
                />

                  

              <Route  path="/signin"  render={(routeProps) => {
                return  <SignIn  error={this.state.myError} onSignIn={this.handleSignIn} {...routeProps}  />
              }}/>

              <Route  path="/signup"  render={(routeProps) => {
                return  <SignUp onSignUp={this.handleSignUp} {...routeProps}  />
              }}/>

                <Route
                  path="/profile"
                  render={(routeProps) => {
                    return <Profile user={this.state.user} error={this.state.myError} {...routeProps} />;
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

            <Route exact path="/playlist/:id"  render={(routeProps) => {
                return  <PlaylistDetail   {...routeProps}  />
              }}/>

              
            <Route path="/playlist/:id/edit"  render={(routeProps) => {
                return  <EditPlaylist  {...routeProps}  />
              }}/>
                <Route component={NotFound} />
              
              </Switch>
            </div>
          );
        }
}

export default withRouter(App);
