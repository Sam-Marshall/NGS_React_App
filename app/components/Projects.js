import React from 'react';

import {
  Accordion,
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Input,
  List,
  Menu,
  Modal,
  Segment,
  Sidebar,
  Table,
  Visibility,
} from 'semantic-ui-react';

import {NavLink} from 'react-router-dom';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {projects:[], newPrjModalOpen: false};

    this.state['activeItem'] = 'home';
    this.state['sbvisible'] = true;

    this.openModal = () => this.setState({newPrjModalOpen: true});
    this.closeModal = () => this.setState({newPrjModalOpen: false});

    this.clickSaveProject = () => {
      axios.post('/project', {
        prjname:"test1",

      })
      .then(function(res) {
        this.closeModal();
      }.bind(this))
      .catch(function(err) {
        this.closeModal();
      }.bind(this))
    };

//    alert(this.props.test);

    this.onClickHandler = (e, {name}) => {
      //alert("On Click Handler: "+name);
      this.setState({activeItem:name});
    }
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

/*
  componentWillReceiveProps(nextProps) {
    this.setState({sbvisible: nextProps.value})
  }
*/

  render() {

    const { activeItem } = this.state;
    const { sbvisible } = this.state;
 
    return (
     <div>

  <Modal
    open={this.state.newPrjModalOpen}
    onClose={this.closeModal}
    closeOnRootNodeClick={false}
    size="small"
  >
    <Modal.Header>Add a New Project</Modal.Header>
    <Modal.Content>
      <div><Input placeholder="Project name" /></div>
      <Segment basic textAlign="center">
        <Button.Group>
        <Button positive onClick={this.clickSaveProject}>Save</Button>
        <Button.Or />
        <Button onClick={this.closeModal}>Cancel</Button>
        </Button.Group>
      </Segment>
    </Modal.Content>
  </Modal>

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
       <Segment textAlign="center">     
         <h2>Projects</h2>
       </Segment>
     <Grid>
       <Grid.Row>
       <Grid.Column width={2}><div></div></Grid.Column>
       <Grid.Column width={12}>
         <Segment textAlign="right">
           <Button onClick={this.openModal} >New Project</Button>
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
          <Table.HeaderCell>Privileges</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
     <Table.Body>
        {this.state.projects.map(project => {
            return(
              <Table.Row>
                <Table.Cell>
                  {project.projectname}
                </Table.Cell>
                <Table.Cell>
                  Sys Admin
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

       </Visibility>
     </div>
   )
  }
}
