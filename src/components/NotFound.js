import React, { Component } from 'react'
import LottieControl from './LottieControl'
import spiderJson from '../animation/spider.json'

class NotFound extends Component {
    render() {
        return (
            <div>
                404 Spiderssssssssss! 
                <LottieControl 
                    width={400}
                    height={200}
                    animation={spiderJson}
                />
            </div>
        )
    }
}


export default NotFound