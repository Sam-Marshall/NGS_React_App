import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Form, Button, Checkbox } from 'semantic-ui-react';

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
      <Container>

        <Header as='h2'>I'm a child component!</Header>

        <Form>

          <Header as='h3'>I'm a form!</Header>

          <Form.Field>
            <label>Field One</label>
            <input placeholder='Some Input' />
          </Form.Field>

          <Form.Field>
            <label>Field Two</label>
            <input placeholder='Some Other Input' />
          </Form.Field>

          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit'>Submit</Button>

        </Form>

      </Container>
    );

  }

}

module.exports = Child;
