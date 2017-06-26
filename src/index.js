import React from 'react';
import ReactDOM from 'react-dom';

// import NorthcoderList from './components/NorthcoderList';
import Counter from './components/Counter';

/*
const tutors = [
    {name: 'Mauro'},
    {name: 'Harriet', color: 'cornflowerblue'},
    {name: 'Daryl'},
    {name: 'Sam', color: 'green'},
    {name: 'Ruth'},
    {name: 'James'}
];
*/

var counterList = <div>
    <Counter title="Bottles of Water" />
    <Counter title="Bugs fixed" />
    <Counter title="Steps taken" />
</div>;
  //  <NorthcoderList northcoders={tutors} />,

ReactDOM.render(
    counterList,
    document.getElementById('root')
);