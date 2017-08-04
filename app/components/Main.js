// React Dependencies
import React from 'react';
import helpers from './utils/helpers';

// Semantic 
import { Container, Header } from 'semantic-ui-react';

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

      <Container>

        <Header as='h1'>Hello</Header>
        <Child />

      </Container>
      
    );
  }
};
