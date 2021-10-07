import React, {Component} from 'react';
import "./component.css";


class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
        }
        this.handleClick1=()=>{
            this.setState((prevState)=>{
                return {
                    number1:prevState.number1 + 1,
                   
                    
                };
            })

        }
        this.handleClick2=()=>{
            this.setState((prevState)=>{
                return {
                    number2:prevState.number2 +1,
                    
                }
            })

        }

        this.restart=() => {
            this.setState(()=>{
                  return {
                      number1: 0,
                      number2: 0,
                  }
            })
        }


    }
  render(){
      const {number1,number2} = this.state;
      
      return (
          <div>
              <span className="barcelona" onClick={this.handleClick1}>Barcelona {number1}</span>
              <button className="button" onClick={this.restart}>vs</button> 
              <span className="chelsea" onClick={this.handleClick2}> {number2} Chelsea</span>
              </div>
      );
  }

};
    
 
export default ClassComponent;
    
   





