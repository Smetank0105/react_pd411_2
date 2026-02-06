import './Hello.css';
import React from 'react';

class Hello extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            invite : "Your Name please",
            name : "",
            btn_name : "Перевести"
        }
    }
    changeText = () =>
    {
        this.setState({invite: this.state.invite === "Your Name please" ? "Введите Ваше Имя" : "Your Name please"});
        this.setState({btn_name: this.state.btn_name === "Translate" ? "Перевести" : "Translate"});
    }
    inputName = () =>
    {
        this.setState({name : document.getElementById('name').value})
    }
    render()
    {
        return(
            <div>
                <input type="text" id='name' placeholder={this.state.invite} onChange={this.inputName} />
                <p>Hello {this.state.name}</p>
                <button onClick={this.changeText} >{this.state.btn_name}</button>
            </div>
        );
    }
}
export default Hello;