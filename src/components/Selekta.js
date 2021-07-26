import React, { Component } from "react";
import Slider from "./Individual/Slider";
import { Button } from "@material-ui/core";
//import CssBaseline from '@material-ui/core/CssBaseline';
//import Box from '@material-ui/core/Box';
import Container from "@material-ui/core/Container";

//SPLASHSCREEN HOMEPAGE 

class Selekta extends Component {
  render() {
    console.log("test this SPLASH SCREEN");


   //Here inside of the component is where we pass the prop down 
   // "onChange1"  not a keyword, is the variable name we also give it in the APP.JS compenent returned 
    return (
      <div>
        <Container maxWidth="sm">
          <h1>SELEKTA SPLASH PAGE COMPONENT SHOWING</h1>
          <p>
            <Slider onChange1={this.props.onChange1} onChange2={this.props.onChange2} 
            onChange3={this.props.onChange3} onChange4={this.props.onChange4}/>
          </p>
          <p>
            <h4>Generate your personalized playlist</h4>
           <Button  variant="contained" color="primary" onClick={this.props.onSelekting}>
              Start Selekting
            </Button>
          </p>
        </Container>
      </div>
    );
  }
}

export default Selekta;
