import './Form.css';
import React from 'react';

class Form extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    state = 
    {
        lastName:"",
        firstName:"",
        eMail:""
    };

    update = (e) =>
    {
        this.setState({[e.target.name]:e.target.value});
    }

    approve = () =>
    {
        if(this.state.firstName === "" || this.state.lastName ==="" || this.state.eMail ==="" )
        {
            document.getElementById('greeting').style.visibility = "hidden";
            document.getElementById('check').style.visibility = "visible";
        }
        else
        {
            document.getElementById('check').style.visibility = "hidden";
            document.getElementById('greeting').style.visibility = "visible";
        }
    }

    render()
    {
        const {lastName, firstName, eMail} = this.state;
        return(
            <>
                <form>
                    <div><input type="text" value={lastName} name='lastName' placeholder='Фамилия' onChange={this.update}/></div>
                    <div><input type="text" value={firstName} name='firstName' placeholder='Имя' onChange={this.update}/></div>
                    <div><input type="email" value={eMail} name='eMail' placeholder='E-mail' onChange={this.update}/></div>
                    <div><input type="button" value={"Подтвердить "} onClick={this.approve}/></div>
                </form>
                <p id='greeting'>
                    Здравствуйте {lastName} {firstName}, поздравляем Вас с регистрацией.
                    Надеемся {eMail} это Ваша настоящая почта
                </p>
                <p id='check' style={{visibility:"hidden"}}>
                    Проверьте пожалуйста правильность заполнения.
                </p>
            </>
        );    
    }
}
export default Form;