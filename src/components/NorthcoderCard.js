import React from 'react';

class NorthcoderCard extends React.Component {
    render() {
        // JSX - Javascript syntax extension
        const style = {
            color: this.props.color || 'black',
            border: '3px solid black'
        };
        return ( 
            <div id="NortcoderCard" style={style}>
                <h1>Hi, my name is {this.props.name}</h1>  
             <h2 > Northcoders < /h2>  
            </div >
        );
    }
}

export default NorthcoderCard;