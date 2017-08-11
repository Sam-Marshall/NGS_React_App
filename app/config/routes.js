// Inclue the React library
import React from 'react';
import { HashRouter, BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';

import Main from '../components/Main';
import Projects from '../components/Projects';
import Users from '../components/Users';
import Samples from '../components/Samples';
import Libraries from '../components/Libraries';
import NavBar from '../components/NavBar';

export default class Routes extends React.Component {
  constructor() {
    super();

    this.state = {};
    this.state['testval'] = "One";
    this.state['sbvisible'] = false;

    this.sidebarVisible = false;

    this.toggleSidebar = () => {
//      alert("Sidebar toggle clicked.");

      this.setState({sbvisible: !this.state.sbvisible});

      if (this.state.testval === "One")
        this.setState({testval: "Zero"});
      else
        this.setState({testval: "One"});
    }
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    const {testval} = this.state;
    const {sbvisible} = this.state;

    return (
      <HashRouter>
        <div>
          <NavBar toggleSidebar={this.toggleSidebar}>
          </NavBar>
          <Switch>
            <Route exact path="/" render={()=>(<Redirect to="/home"/>)} />
            <Route path="/home" component={Main}/>
            <Route path="/projects"
              render={() =>
               (
                 <Projects sbvisible={sbvisible} />
               )}
            />
            <Route path="/users"
              render={() =>
                (
                 <Users />
                )}
            />

            <Route path="/samples"
              render={() =>
                (
                  <Samples />
                )}
            />

            <Route path="/libraries"
              render={() =>
                (
                  <Libraries />
                )}
            />
          </Switch>
        </div>
      </HashRouter>
    )

  }
}


// Export the Routes
/*
module.exports = (

  <HashRouter>
    <div>
        <NavBar>
        </NavBar>
	<Switch>
          <Route exact path="/" render={()=>(<Redirect to="/home"/>)} /> 
	  <Route path="/home" component={Main}/>
          <Route path="/projects" component={Projects} />
    	</Switch>
    </div>
  </HashRouter>
  
);
*/
