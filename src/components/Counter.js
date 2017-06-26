import React from 'react';

class Counter extends React.Component {
    constructor (props) {
        super(props);   
        // passes props to React.Component
        this.state = { 
            // state is a keyword 
            count: 0
        };
        this.clickHandler = this.clickHandler.bind(this);
    }
    // Method expected by React
    render () {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.clickHandler}>-</button>
                {" "}
                <span>{this.state.count}</span>
                {" "}
                <button onClick={this.clickHandler}>+</button>
            </div>
        );
    }
    // CUSTOM METHOD
    clickHandler (event) {
 //       console.dir(event.target);
        const buttonValue = event.target.innerText;
        if (buttonValue === '+') {
            this.setState({
                count: this.state.count + 1
            });
  //        this.state.count++;
        } else if (buttonValue === '-') {
            this.setState({
                count: this.state.count - 1
            });
   //       this.state.count--;
        }
        console.log('*** New Count ', this.state.count);
    }
}

export default Counter;