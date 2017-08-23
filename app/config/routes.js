// Inclue the React library
import React from 'react';
import { HashRouter, BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';

import Main from '../components/Main';
import Projects from '../components/Projects';
import Users from '../components/Users';
import Samples from '../components/Samples';
import Libraries from '../components/Libraries';
import NavBar from '../components/NavBar';
import Tech from '../components/Tech';

export default class Routes extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {

    return (
      <HashRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" render={()=>(<Redirect to="/home"/>)} />
            <Route path="/home" component={Main}/>
            <Route path="/projects"
              render={() =>
               (
                 <Projects />
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

            <Route path="/tech"
              render={() =>
                (
                  <Tech />
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
