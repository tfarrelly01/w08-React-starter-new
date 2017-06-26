import React from 'react';

import NorthcoderCard from './NorthcoderCard';

class NorthcoderList extends React.Component {
    render () {
        return (
            <div>
                {this.props.northcoders.map(function(northcoder) {
                    return <NorthcoderCard 
                            key={northcoder.name} 
                            name ={northcoder.name}
                            color={northcoder.color} 
                        />;
                })}
            </div>
        );
    }
}
export default NorthcoderList;
