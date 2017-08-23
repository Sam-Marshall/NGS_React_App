"use strict";

// React Dependencies
import React from 'react';

import {NavLink} from 'react-router-dom';

// Semantic

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

import { Link } from 'react-router-dom';

import helpers from './utils/helpers';


// require components
import Child from './children/Child'

export default class Main extends React.Component{

  constructor() {
      super();
      this.state = {
        visible: false,
        userId: 1,
        userName: '',
        role: '',
        projectList: []
      };
      this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  componentDidMount() {
/*    helpers.getUser(this.state.userId)
      .then(function(response){
        this.setState({
          userName: `${response.data.firstName} ${response.data.lastName}`,
          role: response.data.Role.role
        })
      }.bind(this));
*/
  }

  componentDidUpdate(prevProps, prevState) {
  }

  toggleVisibility() {
    this.setState({visible: !this.state.visible});
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
