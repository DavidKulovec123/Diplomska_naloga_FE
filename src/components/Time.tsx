import React from 'react';

import './App.css';

class Time extends React.Component {
    state = {
        curTime: ""
    };
    componentDidMount() {
        this.getTime();
    }
    getTime = () => {
        var today = new Date(),
            curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        this.setState({ curTime });
    };
    render(){
        return (
            <div className="App">
                <p>Current Time (H:i:s) : {this.state.curTime}</p>
            </div>
        );
    }
}
export default Time;