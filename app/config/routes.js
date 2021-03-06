// Inclue the React library
import React from 'react';
import { HashRouter, BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';

import Main from '../components/Main';
import Projects from '../components/Projects';
import Users from '../components/Users';
import BasicUserInterface from '../components/BasicUserInterface';
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
            <Route exact path="/" render={()=>(<Redirect to="/welcome"/>)} />
            <Route path="/welcome" component={Main}/>
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

            <Route path="/home"
              render={() =>
                (
                  <BasicUserInterface />
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
