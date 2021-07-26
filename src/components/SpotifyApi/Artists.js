import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

 


class Artists extends Component {

    render() {
        const {artists} = this.props
         
        axios.get(`http://localhost:5005/api/artists`)
        
        .then(( response ) => {
           console.log( response.data ) //HERE YOU WILL GET THE ARTISTS
        })


        
        return (
            <div>
                
            {
                artists.map((artists, i)=>{
                    return <p key={i}>
                        <Link to={`/artists/${artists._id}`}> {artists.name}</Link></p>  
                })


            }

            </div>
        )
    }
}

export default Artists