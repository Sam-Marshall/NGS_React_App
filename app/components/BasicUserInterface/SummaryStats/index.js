import React, { Component } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import {
  Accordion, Button, Checkbox,
  Container, Divider,
  Dropdown, Form,
  Grid, Header,
  Icon, Image,
  Input, List, 
  Menu, Modal, 
  Segment, Sidebar, Tab,
  Table, TextArea,
  Visibility,
} from 'semantic-ui-react';

const { Field } = Form;
const { Column, Row } = Grid;
const { HeaderCell, Cell } = Table;
const { Item } = Menu;

export default class SummaryStats extends Component {

  constructor(props) {

    super(props);

    this.state = { 
      statPictures: [
        "https://docs.oracle.com/javase/8/javafx/user-interface-tutorial/img/pie-sample.png",
        "https://i1.wp.com/thebudgetnistablog.com/wp-content/uploads/2014/08/gogle_docs_pie_thumb.gif"
      ]
    };

  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }


  render() {
    const { statPictures } = this.state

    const panes=[
      { menuItem: 'Stat1', render: () => 
        <Tab.Pane attached={false}>
          <Header as='h1'>Stat 1</Header>
          <Image src={statPictures[0]} size='medium' shape='rounded' />
        </Tab.Pane> },
      { menuItem: 'Stat2', render: () => 
        <Tab.Pane attached={false}>
          <Header as='h1'>Stat 2</Header>
          <Image src={statPictures[1]} size='medium' shape='rounded' />
        </Tab.Pane> },
      ]

    return (
      <div textAlign="left">
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </div>
    ) 

  }

}