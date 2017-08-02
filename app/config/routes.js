// Inclue the React library
import React from 'react';
import { HashRouter, Router, Route, Switch } from 'react-router-dom';

import Main from '../components/Main';

// Export the Routes
module.exports = (

  <HashRouter>
    <div>
		<Switch>
	      	<Route path="/" component={Main}/>
    	</Switch>
    </div>
  </HashRouter>
  
);