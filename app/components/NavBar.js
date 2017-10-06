import React from 'react';

import {
  Button, Container, Divider,
  Grid, Header, Icon,
  Image, List, Menu,
  Sidebar, Segment, Visibility,
} from 'semantic-ui-react';

import {Link, NavLink} from 'react-router-dom';

import helpers from './utils/helpers';

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
      isAuthenticated: false,
      userName: '',
      userRole: 'none',
      activeItem:'home'

    };
   
    this.slackHRef="https://slack.com/oauth/authorize?scope=identity.basic,identity.email&client_id=187494903379.207940946065"; 

    this.onClickHandler = (e, props) => {

      this.setState({activeItem:name});

    }

    this.onLogOut = (e, props) => {
      alert("Log Out!");
    }
  }

  componentWillMount() {
    helpers.getUserInfo()
      .then( (response) => {
        if (response.data.isauthenticated) {
          this.setState({
            isAuthenticated: response.data.isauthenticated,
            userRole: response.data.role,
            fullname: response.data.fullname,
            isReady: true
           });
         } else {
          this.setState({
            isAuthenticated: true,
            userRole: 'sysadmin',
            isReady: true
          });
        }
      });
    
    {/*     
    Changed else response above to get db up and running. Was locked out of the tabs otherwise
      isAuthenticated: false,
      userRole: 'none',
      isReady: true
    */}

  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {

    const activeItem  = this.state.activeItem;
    const isAuthenticated  = this.state.isAuthenticated;
    const userRole = this.state.userRole;

    if (!this.state.isReady) {
      return (
        <div>
        ...Waiting
        </div>
      )
    }
    else

    return (
      <div>
        <Segment inverted>
        <Container>
          <Menu inverted pointing secondary size='large' defaultActiveIndex={0}>
            <Menu.Item
              as={NavLink} to='/home'
              name={'home'}
              active={activeItem === 'home'}
              onClick={this.onClickHandler}>
              Home
            </Menu.Item>

            { isAuthenticated ? (
              <Container>
                { (userRole == 'sysadmin') ? (
                  <Menu.Item as={NavLink} to='/users'
                    name={'users'}
                    active={activeItem === 'users'}
                    onClick={this.onClickHandler}>
                    Users
                  </Menu.Item> ) : null }
           
                { ((userRole == 'sysadmin') || (userRole == 'projadmin')) ? ( 
                  <Menu.Item
                    as={NavLink} to='/projects'
                    name={'projects'}
                    active={activeItem === 'projects'}
                    onClick={this.onClickHandler}>
                    Projects
                  </Menu.Item> ) : null }

                <Menu.Item as={NavLink} to='/samples'
                  name='samples'
                  active={activeItem === 'samples'}
                  onClick={this.onClickHandler}>
                  Samples
                </Menu.Item>
          
                { ((userRole == 'sysadmin') || (userRole == 'projadmin') || (userRole == 'admin')) ? ( 
                  <Menu.Item as={NavLink} to='/libraries'
                    name='libraries'
                    active={activeItem === 'libraries'}
                    onClick={this.onClickHandler}>
                    Libraries
                  </Menu.Item> ) : null }
                { ((userRole == 'sysadmin') || (userRole == 'projadmin') || (userRole == 'admin')) ? (
                  <Menu.Item  as={NavLink} to='/tech'
                    name={'tech'}
                    active={activeItem === 'tech'}
                    onClick={this.onClickHandler}>
                    Tech
                  </Menu.Item> ) : null }

                </Container>
            ) : null }

            <Menu.Item position='right'>
              {!isAuthenticated ? (
                <Button as='a'
                  href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=187494903379.207940946065"
                  inverted style={{ marginLeft: '0.5em' }}
                >
                 Slack Login
                </Button>
              ) : (
                <Button as='a'
                  inverted style={{ marginLeft: '0.5em' }}
                  href="/logout"
                >
                  Log Out
                </Button>
              )}
{/*
              <Button as='a'
                inverted style={{ marginLeft: '0.5em' }}
              >
                Sign Up
              </Button>
*/ }
            </Menu.Item>
          </Menu>
        </Container>
        </Segment>
      </div>
    )
  }  
}
