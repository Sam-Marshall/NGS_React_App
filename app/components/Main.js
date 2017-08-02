// React Dependencies
import React from 'react';
import helpers from './utils/helpers';

// require components
import Child from './children/Child'

export default class Main extends React.Component{
  constructor() {
      super();
      this.state = {};
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }


  render() {
    return (
      <div className="wrapper">

        <h1>Hello</h1>
        <Child />

      </div>
    );
  }
};
