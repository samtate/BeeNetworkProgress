import React from 'react';
import { withRouter } from 'react-router-dom';

import SchemesPage from '../SchemesPage';
import Header from '../Header';
import { withAuthentication } from '../Session';
import { AuthUserContext } from '../Session';

const Content = ({ firebase, borough, history }) => {
  const doUpdateBorough = (e) => {
    history.push(`/${e.target.value}`);
  }
  return (
  <>
    <Header doUpdateBorough={doUpdateBorough} borough={borough} />
    <AuthUserContext.Consumer>
      {authUser => (
        <SchemesPage borough={borough} firebase={firebase} authUser={authUser}/>
      )}
    </AuthUserContext.Consumer>
  </>
  )
}

export default withRouter(withAuthentication(Content));
