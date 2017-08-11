import React from 'react';

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
  Sidebar,
  Segment,
  Visibility,
} from 'semantic-ui-react';

import {Link, NavLink} from 'react-router-dom';

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    
    this.state['activeItem'] = 'home';

    this.hideFixedMenu = () => {}
    this.showFixedMenu = () => {}

    this.onClickHandler = (e, {name}) => {
      //alert("On Click Handler: "+name);
      this.setState({activeItem:name});
    }

    this.toggleVisibility  = () => {
      this.props.toggleSidebar();
      this.setState({ visible: !this.state.visible });
    }
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {

    const { activeItem } = this.state;

    const { visible } = this.state;

    return (
      <div>
      <div>
{/*
        { visible ? <FixedMenu /> : null } 
*/}
            <Segment inverted>
            <Container>
              <Menu inverted pointing secondary size='large' defaultActiveIndex={0}>

{/*
                <Menu.Item position='left'>
                  <Button inverted onClick={this.toggleVisibility}>Burger</Button>
                </Menu.Item>
*/}

                <Menu.Item
                  as={NavLink} to='/home'
                  name={'home'}
                  active={activeItem === 'home'}
                  onClick={this.onClickHandler}>
                  Home
                </Menu.Item>

                <Menu.Item as={NavLink} to='/users'
                  name={'users'}
                  active={activeItem === 'users'}
                  onClick={this.onClickHandler}>
                  Users
                </Menu.Item>

                <Menu.Item
                  as={NavLink} to='/projects'
                  name={'projects'}
                  active={activeItem === 'projects'}
                  onClick={this.onClickHandler}>
                  Projects
                </Menu.Item>

                <Menu.Item as={NavLink} to='/samples'
                  name='samples'
                  active={activeItem === 'samples'}
                  onClick={this.onClickHandler}>
                  Samples
                </Menu.Item>
               
                <Menu.Item as={NavLink} to='/libraries'
                  name='libraries'
                  active={activeItem === 'libraries'}
                  onClick={this.onClickHandler}>
                  Libraries
                </Menu.Item>
 
                <Menu.Item position='right'>
                  <Button as='a' href="https://slack.com/oauth/authorize?scope=identity.basic,identity.email&client_id=187494903379.207940946065" inverted style={{ marginLeft: '0.5em' }}>Slack Login</Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </div>
</div>
      )
  }  
}
