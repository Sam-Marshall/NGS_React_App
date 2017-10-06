import React, { Component } from 'react';

import axios from 'axios';
import styled from 'styled-components';

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

export default class Profile extends Component {

  constructor(props) {

    super(props);

    this.state = { 
      profilePictures: [
        "https://robohash.org/genome?set=set4",
        "https://robohash.org/dna?set=set4",
        "https://robohash.org/rna?set=set4",
        "https://robohash.org/pretty?set=set4",
        "https://robohash.org/cool?set=set4",
        "https://robohash.org/cute?set=set4",
        "https://robohash.org/funny?set=set4",
      ]
    };

  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }


  render() {
    const { profilePictures } = this.state

    return (
      <Segment textAlign="left">
        <Image src={profilePictures[0]} size='medium' shape='rounded' />
        <Header as='h2' content='User Name' />
        <Header as='h3' content='User Role' />
      </Segment>
    ) 

  }

}