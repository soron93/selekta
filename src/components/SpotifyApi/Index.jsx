import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Index extends Component {
    render() {


        return (



            <div class="slidecontainer">
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
                <input type="text" name="q" id="title"></input>
                <Button type="submit">Search for an artist</Button>
            </div>



        )
    }
}
export default Index

