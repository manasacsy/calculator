import React from 'react';
import axios from 'axios';

class Calculator extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data :{
                        valFinal:0
                    }
            };
            this.calculateAction = this.calculateAction.bind(this);
        }
        calculateAction(){
            var newState = this.state;  
            console.log(newState);
            var self = this;
            axios.get('http://localhost:4000/calculate/' + document.getElementById("value1").value + "/" + document.getElementById("value2").value + "/" + document.getElementById("operation").value)
                      .then(function (response) {
                        newState.data.valFinal = response.data.valFinal;
                        console.log(newState);
                       self.setState(newState);
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
            }
        render() {
             return (
                <div>
                <p><span>Operand 1:</span><input type="number" id="value1" name="value1"></input></p>
                <p><span>Operand 2:</span><input type="number" id="value2" name="value2"></input></p>
                <p>
                    <span>Operation:</span>
                    <select id="operation">
                      <option value="1">Add</option>
                      <option value="2">Subtraction</option>
                      <option value="3">Multiplication</option>
                      <option value="4">Division</option>
                    </select>
                </p>
                <p><span>Result:</span><span>{this.state.data.valFinal}</span></p>
                <p><button onClick={this.calculateAction.bind(this)}>CALCULATE</button></p>
                </div>
                 );
            }    
}
export default Calculator;