import React from 'react';

import {
  Accordion,
  Button,
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
} from 'semantic-ui-react';


export default class Libraries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {} 

  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {


    return (

     <div>
     <Segment textAlign="center">
       <h2>Libraries</h2>
     </Segment>
     <Grid>
       <Grid.Row>
       <Grid.Column width={2}><div></div></Grid.Column>
       <Grid.Column width={12}>
         <Segment textAlign="right">
           <Button onClick={this.openModal} >New Library</Button>
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
          <Table.HeaderCell>Name</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
{/*
        {this.state.samples.map(sample => {
            return(
              <Table.Row>
                <Table.Cell>
                  {sample.sampleid}
                </Table.Cell>
                <Table.Cell>
                  Sys Admin
                </Table.Cell>
              </Table.Row>
            )
          })
        }
*/}
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

     </div>
    )
  }
}
