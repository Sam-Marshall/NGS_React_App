import React, { Component } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import AddSample from './AddSample';
import Profile from './Profile';

import {
  Accordion, Button,
  Container, Divider,
  Dropdown, Form,
  Grid, Header,
  Icon, Image,
  Input, List, 
  Menu, Modal, 
  Segment, Sidebar,
  Table, TextArea,
  Visibility,
} from 'semantic-ui-react';

const { Field } = Form;
const { Column, Row } = Grid;
const { HeaderCell, Cell } = Table;
const { Item } = Menu;

export default class BasicUserInterface extends Component {

  constructor(props) {

    super(props);

    this.state = { 
    };

  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }


  render() {

    return (
      <Container>
        <Grid>
          <Column width={12}>
            <AddSample />
          </Column>
          <Column width={4}>
            <Profile />
          </Column>
        </Grid>
      </Container>
    )

  }

}
