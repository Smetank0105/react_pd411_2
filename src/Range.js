import './Range.css';
import React from 'react';
class Range extends React.Component
{
    state = {volume:"0"};
    componentDidMount()
    {
        this.setState({volume:document.getElementById('range').value});
    }
    range = (event) =>
    {
        this.setState({volume:event.target.value})
    }
    render()
    {
        return(
            <div>
                <br />
                <h3>{this.state.volume}</h3>
                <input id='range' type="range" style={{width:"80%"}} onChange={this.range} />
            </div>
        );
    }
}
export default Range;