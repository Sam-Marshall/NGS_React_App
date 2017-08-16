import React from 'react';

import axios from 'axios';

import {
  Accordion,
  Button,
  Checkbox,
  Container,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Input,
  Label,
  List,
  Menu,
  Modal,
  Segment,
  Sidebar,
  Table,
  Visibility,
} from 'semantic-ui-react';


export default class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = { users:[], newUserModalOpen:false, privilege: 'user' };

    this.openModal = () => this.setState({newUserModalOpen: true});
    this.closeModal = () => this.setState({newUserModalOpen: false});

    this.setPrivilege = (e, { value }) => {
      this.setState({ privilege: value })
    }

    this.clickSaveUser = () => {
      axios.post('/user', {
        username:"gpcrawford",
        
      })
      .then(function(res) {
        this.closeModal();
      }.bind(this))
      .catch(function(err) {
        this.closeModal();
      }.bind(this))
    };
  }

  componentDidMount() {
   axios.get('/user')
      .then(res => {
        this.setState({ users: res.data.users });
      });
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {

    return (
     <div>
  <Modal
    open={this.state.newUserModalOpen}
    onClose={this.closeModal}
    closeOnRootNodeClick={false}
    size="small"
  >
    <Modal.Header>Add a New User</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>New User Info</Header>
        <div></div>
      </Modal.Description>
      <Form>
       <Form.Field>
         <Input placeholder="Username" />
       </Form.Field> 
       <Form.Field>
          Privilege Level: <b>{this.state.privilege}</b>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='SysAdmin'
            name='checkboxRadioGroup'
            value='sysadmin'
            checked={this.state.privilege === 'sysadmin'}
            onChange={this.setPrivilege}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Project Admin'
            name='checkboxRadioGroup'
            value='prjadmin'
            checked={this.state.privilege === 'prjadmin'}
            onChange={this.setPrivilege}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='User'
            name='checkboxRadioGroup'
            value='user'
            checked={this.state.privilege === 'user'}
            onChange={this.setPrivilege}
          />
        </Form.Field>
      </Form>
      <Segment basic textAlign="center">
        <Button.Group>
        <Button positive onClick={this.clickSaveUser}>Save</Button>
        <Button.Or />
        <Button onClick={this.closeModal}>Cancel</Button>
        </Button.Group>
      </Segment>
    </Modal.Content>
  </Modal>
     <Segment textAlign="center">
       <h2>Users</h2>
     </Segment>
     <Grid>
       <Grid.Row>
       <Grid.Column width={2}><div></div></Grid.Column>
       <Grid.Column width={12}>
         <Segment textAlign="right">
           <Button onClick={this.openModal} >New User</Button>
         </Segment>
       </Grid.Column>
       <Grid.Column width={2}><div></div></Grid.Column>
       </Grid.Row>
       <Grid.Row>
       <Grid.Column width={2}><div></div></Grid.Column>
       <Grid.Column width={12}>
         <Segment textAlign="left">
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Username</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Initials</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Privileges</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {this.state.users.map(user => {
            return(
              <Table.Row key={user.id}>
                <Table.Cell>
                  {user.userName}
                </Table.Cell>
                <Table.Cell>
                  {user.firstName} {user.lastName}
                </Table.Cell>
                <Table.Cell>
                  {user.initials}
                </Table.Cell>
                <Table.Cell>
                  {user.email}
                </Table.Cell>
                <Table.Cell>
                  {user.Role.role}
                </Table.Cell>
              </Table.Row>
            )
          })
        }
      </Table.Body>

      <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='left chevron' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='right chevron' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
      </Table.Footer>
    </Table>
       </Segment>
       </Grid.Column>
       <Grid.Column width={2}><div></div></Grid.Column>
       </Grid.Row>
     </Grid>

{/*
      <div>
        <input type="text" placeholder="User Name" />
      </div>
      <div>
        <Button.Group>
        <Button positive>Save</Button>
        <Button.Or />
        <Button>Cancel</Button>
        </Button.Group>
      </div>
*/}

     </div>
    )
  }
}
