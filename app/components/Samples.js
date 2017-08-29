import React from 'react';

import axios from 'axios';

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


export default class Samples extends React.Component {

  constructor(props) {
    super(props);

    this.state = { samples:[],
                   samplesPageBfr:[],
                   projects:[],
                   sampletype: [],
                   species: [],
                   aligngenome: [],
                   groups:[],
                   enterSampleModalOpen:false,
                   uploadSampleModalOpen:false,
                   pasteSampleModalOpen:false,
                   newSampleModalOpen:false,
                   fileToUpload: '' };

    // This code is for demo purposes.  The true values need to be read from database.
    this.state.projects.push({text: 'project 1', value: 101});
    this.state.projects.push({text: 'project 2', value: 102});
    this.state.projects.push({text: 'project 3', value: 103});
    this.state.projects.push({text: 'project 4', value: 104});
    this.state.projects.push({text: 'project 5', value: 105});

    this.state.species.push({text: 'mouse', value: 101 });
    this.state.species.push({text: 'rat', value: 102 });
    this.state.species.push({text: 'human', value: 103});
    this.state.species.push({text: 'fruit fly', value: 104});
    this.state.species.push({text: 'yeast', value: 105});

    this.state.sampletype.push({text: 'type 1', value: 101});
    this.state.sampletype.push({text: 'type 2', value: 102});
    this.state.sampletype.push({text: 'type 3', value: 103});
    this.state.sampletype.push({text: 'type 4', value: 104});
    this.state.sampletype.push({text: 'type 5', value: 105});

    this.state.aligngenome.push({text: 'genome 1', value: 101});
    this.state.aligngenome.push({text: 'genome 2', value: 102});
    this.state.aligngenome.push({text: 'genome 3', value: 103});
    this.state.aligngenome.push({text: 'genome 4', value: 104});
    this.state.aligngenome.push({text: 'genome 5', value: 105});

    this.state.groups.push({text: 'Group 1', value:101});
    this.state.groups.push({text: 'Group 2', value:102});
    this.state.groups.push({text: 'Group 3', value:103});
    this.state.groups.push({text: 'Group 4', value:104});    

    this.openModal = () => this.setState({newSampleModalOpen: true});
    this.closeModal = () => this.setState({newSampleModalOpen: false});

    this.openEnterModal = () => this.setState({enterSampleModalOpen:true});
    this.closeEnterModal = () => this.setState({enterSampleModalOpen:false});

    this.openUploadModal = () => this.setState({uploadSampleModalOpen:true});
    this.closeUploadModal = () => this.setState({uploadSampleModalOpen:false});

    this.openPasteModal = () => this.setState({pasteSampleModalOpen:true});
    this.closePasteModal = () => this.setState({pasteSampleModalOpen:false});

    this.onFileChange = (e) => {
//      alert(e.target.files[0].name);
      this.setState({fileToUpload: e.target.files[0]});
    }

   this.onGroupChange = (e, {value}) => {
     console.log("Selected value: "+value);
     this.setState({groupId: value});
   }
   
   this.onPagerClick = (e) => {
     console.log("Pager Click");
   }

   this.prevPages = (e) => {
     console.log("Previous pages click");
   }

   this.nextPages = (e) => {
     console.log("Next pages click");
   }

   this.uploadFile = () => {
     const url = '/sample/upload';
     const formData = new FormData();
     formData.append('samplefile', this.state.fileToUpload);
     formData.append('group', 'Group 1');
     const config = {
       headers: {
         'content-type': 'multipart/form-data'
       }
     }

     axios.post(url, formData, config).then(resp => {
       this.closeUploadModal();
       // Insert returned data into view.
       this.setState({samples: resp.data.samples});
     });
    }

  }

  componentDidMount() {
    axios.get('/sample')
      .then(res => {
        this.setState({ samples: res.data.samples });
        //Copy first 20 samples into samplesPageBfr
        var maxSamples = 20;
        var bfr = [];
        if (res.data.samples.length < 20)
          maxSamples = res.data.sample.length;
        for(var i = 0; i < maxSamples; i++)
          bfr.push(res.data.samples[i]);
        this.setState({ samplesPageBfr: bfr});
      });
  }

  componentDidUpdate(prevProps, prevState) {
  }

  EnterSampleModal(props) {
    return (
      <div>
        <Modal
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
              <Form.Field>
                <Input placeholder="Sample Name" />
              </Form.Field>
              <Form.Field>
                <Dropdown placeholder="Project" options={this.state.projects} />
              </Form.Field>
              <Form.Field>
                <Dropdown placeholder="Species" options={this.state.species} />
              </Form.Field>
              <Form.Field>
                <Dropdown placeholder="Sample Type" options={this.state.sampletype} />
              </Form.Field>
              <Form.Field>
                <Dropdown placeholder="Alignment Genome" options={this.state.aligngenome} />
              </Form.Field>
            </Form>

            <Segment basic textAlign="center">
              <Button.Group>
                <Button positive>Save</Button>
                <Button.Or />
                <Button onClick={this.closeEnterModal}>Cancel</Button>
              </Button.Group>
            </Segment>

          </Modal.Content>

        </Modal>
      </div>
    )
  }

  render() {

    return (
      <div>
        {this.EnterSampleModal()}
  <Modal
    open={this.state.uploadSampleModalOpen}
    onClose={this.closeUploadModal}
    closeOnRootNodeClick={false}
    size="small"
  >
    <Modal.Header>
      Upload Sample Data
    </Modal.Header>
    <Modal.Content>
      <Form>
        <div>
          <Form.Field>
          <label>File to Upload</label>
          <input type="file" name="samplefile" onChange={this.onFileChange} />
          </Form.Field>
        </div>
        <div>
          <Form.Select label='Group' options={this.state.groups} placeholder='Group' onChange={this.onGroupChange} />
        </div>
      </Form>
      <Segment basic textAlign="center">
        <Button.Group>
        <Button positive onClick={this.uploadFile}>Save</Button>
        <Button.Or />
        <Button onClick={this.closeUploadModal}>Cancel</Button>
        </Button.Group>
      </Segment>
    </Modal.Content>
  </Modal>

  <Modal
    open={this.state.pasteSampleModalOpen}
    onClose={this.closePasteModal}
    closeOnRootNodeClick={false}
    size="small"
  >
    <Modal.Header>
     Paste Sample Data
    </Modal.Header>
    <Modal.Content>
      <Form>
        <TextArea rows={10} placeholder="Paste your sample data here..." />
      </Form>
      <Segment basic textAlign="center">
        <Button.Group>
        <Button positive>Save</Button>
        <Button.Or />
        <Button onClick={this.closePasteModal}>Cancel</Button>
        </Button.Group>
      </Segment>
    </Modal.Content>
  </Modal>

     <Segment textAlign="center">
       <h2>Samples</h2>
     </Segment>
     <Grid>
       <Grid.Row>
       <Grid.Column width={2}><div></div></Grid.Column>
       <Grid.Column width={12}>
         <Segment textAlign="right">
           <Button onClick={this.openUploadModal} >Upload Samples</Button>
           <Button onClick={this.openEnterModal} >Enter Sample</Button>
           <Button onClick={this.openPasteModal} >Paste Samples</Button>
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
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Sample Type</Table.HeaderCell>
          <Table.HeaderCell>Species</Table.HeaderCell>
          <Table.HeaderCell>Alignment</Table.HeaderCell>
          <Table.HeaderCell>Scientist</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>

        {this.state.samplesPageBfr.map(sample => {
            return(
              <Table.Row key={sample.id}>
                <Table.Cell>
                  {sample.id}
                </Table.Cell>
                <Table.Cell>
                  {sample.name}
                </Table.Cell>
                <Table.Cell>
                  {sample.SampleType.name}
                </Table.Cell>
                <Table.Cell>
                  {sample.Species.name}
                </Table.Cell>
                <Table.Cell>
                  {sample.AlignmentGenome.name}
                </Table.Cell>
                <Table.Cell>
                  {sample.Project.User.initials}
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
            <Menu.Item as='a' icon onClick={this.prevPages}>
              <Icon name='left chevron' />
            </Menu.Item>
            <Menu.Item as='a' onClick={this.onPagerClick}>1</Menu.Item>
            <Menu.Item as='a' onClick={this.onPagerClick}>2</Menu.Item>
            <Menu.Item as='a' onClick={this.onPagerClick}>3</Menu.Item>
            <Menu.Item as='a' onClick={this.onPagerClick}>4</Menu.Item>

            <Menu.Item as='a' icon onClick={this.nextPages}>
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
