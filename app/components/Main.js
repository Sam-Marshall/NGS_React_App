"use strict";

// React Dependencies
import React from 'react';

import {NavLink} from 'react-router-dom';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';

import helpers from './utils/helpers';

// require components
import Child from './children/Child'
import Authenticate from './children/Authenticate'

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
     <div>

        <Visibility
          once={false}
        >
          <Segment
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Container text>
              <Header
                as='h1'
                content='NGS Database Manager'
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content=''
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
            </Container>
          </Segment>
        </Visibility>
      </div>
    );
  }
};
