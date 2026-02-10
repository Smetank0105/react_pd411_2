import './Converter.css';
import React from 'react';

class Converter extends React.Component
{
    convertToInt= () =>
    {
        let numberSystemIn = document.getElementById('inConvert').value;
        let numberSystemOut = document.getElementById('outConvert').value;
        
        let input =  document.getElementById("inTxtField").value;
        let dec = parseInt(input, numberSystemIn);
        let output = dec.toString(numberSystemOut);

        document.getElementById('outTxtField').value = output;
    }

    render()
    {
        return(
        <div className='Container'>
            <div className='Field'>
                <select id='inConvert' defaultValue={10} onChange={this.convertToInt}>
                    <option value={2}>2 (Двоичная)</option>
                    <option value={8}>8 (Восьмеричная)</option>
                    <option value={10}>10 (Десятичная)</option>
                    <option value={16}>16 (Шестнадцатиричная)</option>
                </select>
                <input id='inTxtField' type="text" placeholder='Исходное число' onChange={this.convertToInt}/>
            </div>
            <div className='Field'>
                <select id='outConvert' defaultValue={2} onChange={this.convertToInt}>
                    <option value={2}>2 (Двоичная)</option>
                    <option value={8}>8 (Восьмеричная)</option>
                    <option value={10}>10 (Десятичная)</option>
                    <option value={16}>16 (Шестнадцатиричная)</option>
                </select>
                <input id='outTxtField' type="text" readOnly={true}/>
            </div>
        </div>
        );
    }
}
export default Converter;