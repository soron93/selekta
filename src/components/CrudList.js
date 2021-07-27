import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class CrudList extends Component {



    render() {
        const {cruds} = this.props
        return (
            <div>
                {
                    cruds.map((crud, i) => {
                        return <p key={i}>
                            <Link to={`/crud/${crud._id}`}> {crud.name} </Link></p>
                    })
                }
            </div>
        )
    }
}

export default CrudList