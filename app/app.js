// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

//import routes from './config/routes';

import Routes from './config/routes';

const app = document.getElementById('app');

ReactDOM.render(<Routes />, app);

//ReactDOM.render(routes, app);
