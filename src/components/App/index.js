import React from 'react';
import {
  Route,
  HashRouter as Router
} from 'react-router-dom';

import Landing from '../Landing';
import Content from '../Content';
import SignIn from '../SignIn'

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = ({ firebase }) => {
  return (
    <Router>
      <Route exact path={ROUTES.LANDING} render={(props) => <Landing {...props} firebase={firebase}/>} />
      <Route path={ROUTES.BOLTON} render={(props) => <Content {...props} borough={'bolton'} firebase={firebase}/>} />
      <Route path={ROUTES.BURY} render={(props) => <Content {...props} borough={'bury'} firebase={firebase}/>} />
      <Route path={ROUTES.MANCHESTER} render={(props) => <Content {...props} borough={'manchester'} firebase={firebase}/>} />
      <Route path={ROUTES.OLDHAM} render={(props) => <Content {...props} borough={'oldham'} firebase={firebase}/>} />
      <Route path={ROUTES.ROCHDALE} render={(props) => <Content {...props} borough={'rochdale'} firebase={firebase}/>} />
      <Route path={ROUTES.SALFORD} render={(props) => <Content {...props} borough={'salford'} firebase={firebase}/>} />
      <Route path={ROUTES.STOCKPORT} render={(props) => <Content {...props} borough={'stockport'} firebase={firebase}/>} />
      <Route path={ROUTES.TAMESIDE} render={(props) => <Content {...props} borough={'tameside'} firebase={firebase}/>} />
      <Route path={ROUTES.TRAFFORD} render={(props) => <Content {...props} borough={'trafford'} firebase={firebase}/>} />
      <Route path={ROUTES.WIGAN} render={(props) => <Content {...props} borough={'wigan'} firebase={firebase}/>} />
      <Route path={ROUTES.SIGNIN} component={SignIn} />
    </Router>
  );
}

export default withAuthentication(App);
