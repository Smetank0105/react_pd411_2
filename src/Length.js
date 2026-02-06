import './Length.css';
import React from 'react';

class Length extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            length : 100
        }
    }

    setLength = () =>
    {
        document.getElementById('square').style.width = this.state.length;
        document.getElementById('square').style.height = this.state.length;
    }

    inc = () =>
    {
        this.setState({length : this.state.length + 10});
        this.setLength();
    }
    
    dec = () =>
    {
        this.setState({length : this.state.length - 10});
        this.setLength();
    }

    reset = () =>
    {
        this.setState({length : 100})
        this.setLength();
    }

    render()
    {
        return(
            <div>
                <button onClick={this.inc}>Inc</button>
                <button onClick={this.dec}>Dec</button>
                <button onClick={this.reset}>Reset</button>
                <div id='square' style={{width:this.state.length}}></div>
            </div>
        );
    }
}
export default Length;