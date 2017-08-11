// React Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import helpers from './utils/helpers';

// Semantic 
import { Container, Header, Sidebar, Segment, Button, Menu, Image, Icon } from 'semantic-ui-react';

// require components
import Child from './children/Child'

export default class Main extends React.Component{
  constructor() {
      super();
      this.state = {
        visible: false,
        userId: 2,
        userName: '',
        projectList: []
      };
      this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  componentDidMount() {
    helpers.getUser(this.state.userId)
      .then(function(response){
        this.setState({
          userName: `${response.data.firstName} ${response.data.lastName}`
        })
      }.bind(this));

  }

  componentDidUpdate(prevProps, prevState) {
  }

  toggleVisibility() {
    this.setState({visible: !this.state.visible});
  }

  render() {
    const { visible } = this.state
    return (
      <div>
        <Icon name='sidebar' onClick={this.toggleVisibility}></Icon>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='search'>
              <Icon name='search' />
              Search
            </Menu.Item>
            <Menu.Item name='help'>
              <Icon name='edit' />
              Help
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h1'>Welcome {this.state.userName}</Header>
              <Child userName = {this.state.userName}/>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
};
