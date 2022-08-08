
import React, { Component, useState } from 'react'
import beatoPNG from '../assets/beato.png'
import beatoLaugh from '../assets/ahaha.wav'
import ProfileCard from './profileCard';


class CurrentTime extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };

    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h2 style={{color:'red'}}>Current time : {this.state.date.toLocaleTimeString()}</h2>
            </div>


        );
    }
}

function Homepage() {
    const ahaha = () => {
        const audio = new Audio(beatoLaugh);
        audio.play();
    }
    const Clock = () => {
        return (
            <div>
                <CurrentTime />
            </div>
                
        )
    }

    return (
        <div>
            <Clock />
            <img onClick={ahaha} src={beatoPNG} alt="" />
            <ProfileCard />
        </div>

    )


}

export default Homepage