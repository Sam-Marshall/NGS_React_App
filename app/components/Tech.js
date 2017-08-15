import React from 'react';
import helpers from './utils/helpers';

import {
  Accordion,
  Button,
  Checkbox,
  Container,
  Divider,
  Dropdown,
  Form,
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
  TextArea,
  Visibility,
  Tab
} from 'semantic-ui-react';


export default class Tech extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      thingOne: "Project One",
      thingTwo: "fec",
      thingThree: "hg19",
      thingFour: "15"
    };

    {/*this.openModal = () => this.setState({newSampleModalOpen: true});
    this.closeModal = () => this.setState({newSampleModalOpen: false});

    this.openEnterModal = () => this.setState({enterSampleModalOpen:true});
    this.closeEnterModal = () => this.setState({enterSampleModalOpen:false});*/}
    }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
      const panes=[
      { menuItem: 'New', render: () => 
        <Tab.Pane attached={false}>
          <Header as='h1'>New Submissions</Header>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Add To Pool?</Table.HeaderCell>
                    <Table.HeaderCell>Project Name</Table.HeaderCell>
                    <Table.HeaderCell>Scientist</Table.HeaderCell>
                    <Table.HeaderCell>Genome</Table.HeaderCell>
                    <Table.HeaderCell>Number of Samples</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell collapsing>
                      <Checkbox slider />
                    </Table.Cell>
                      <Table.Cell>{this.state.thingOne}</Table.Cell>
                      <Table.Cell>{this.state.thingTwo}</Table.Cell>
                      <Table.Cell>{this.state.thingThree}</Table.Cell>
                      <Table.Cell>{this.state.thingFour}</Table.Cell>
                  </Table.Row>
                </Table.Body>

                <Table.Footer fullWidth>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell colSpan='5'>
                      <Button floated='right' icon labelPosition='left' primary size='small'>
                        <Icon name='plus' />Pool Samples
                      </Button>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
            </Table>
        </Tab.Pane> },
      { menuItem: 'Processed', render: () => 
        <Tab.Pane attached={false}>
          <Header as='h1'>Processed Samples</Header>
          <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Project</Table.HeaderCell>
                    <Table.HeaderCell>Species</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
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
        </Tab.Pane> },
      ]
    return (


    <div>
      {/*<Modal
        open={this.state.enterSampleModalOpen}
        onClose={this.closeEnterModal}
        closeOnRootNodeClick={false}
        size="small"
      >
      <Modal.Header>
       Enter Sample Data
      </Modal.Header>
      <Modal.Content>
            <Form>
              <div>
              <Input placeholder="Sample name" />
              </div>
              <div>
              <Dropdown placeholder="Project" options={this.state.projects} />
              </div>
              <div>
              <Dropdown placeholder="Species" options={this.state.species} />
              </div>
              <div>
              <Dropdown placeholder="Sample Type" options={this.state.sampletype} />
              </div>
              <div>
              <Dropdown placeholder="Alignment Genome" options={this.state.aligngenome} />
              </div>
            </Form>
        <Segment basic textAlign="center">
          <Button.Group>
          <Button positive>Save</Button>
          <Button.Or />
          <Button onClick={this.closeEnterModal}>Cancel</Button>
          </Button.Group>
        </Segment>
      </Modal.Content>
      </Modal>*/}
      {/*<Button onClick={this.openEnterModal} >Enter Sample</Button>*/}
      <Container>
        <Segment textAlign="center">
          <h2>Technician Interface</h2>
        </Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column width={11}>
              
              <Grid.Row>
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
              </Grid.Row>

              <Grid.Row>
                <Container textAlign="center">
                  <h2>Some Other Content</h2>
                </Container>
              </Grid.Row>

            </Grid.Column>
            <Grid.Column width={5}>
              <Container textAlign="center">
                <h2>Some Other Content</h2>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
     </div>
    )
  }
}