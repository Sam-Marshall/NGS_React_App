import React from 'react';
import { Link } from 'react-router-dom';

export default class Child extends React.Component{
  
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {

    return (
      <div className="wrapper">

        <h2>I'm a child component</h2>

      </div>
    );

  }

}

module.exports = Child;
