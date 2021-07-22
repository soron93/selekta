import React, { Component } from 'react'
import LottieControl from './LottieControl'
import notFound from '../animation/notFound.json'

class NotFound extends Component {
    render() {
        return (
            <div>
                404! 
                <LottieControl 
                    width={400}
                    height={400}
                    animation={notFound}
                />
            </div>
        )
    }
}


export default NotFound