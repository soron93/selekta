import React, { Component } from 'react'
//import {Link} from 'react-router-dom'

class TestShade extends Component {

    
    render() {
       
        console.log('test this')
            
        return (
            
            <div class="slidecontainer">
            <h5>danceability</h5>
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
            </div>
            
          
        )
    }
}

export default TestShade