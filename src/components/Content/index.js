import React from 'react';
import { withRouter } from 'react-router-dom';

import SchemesPage from '../SchemesPage';
import Header from '../Header'

const Content = ({ firebase, borough, history }) => {
  const doUpdateBorough = (e) => {
    history.push(`/${e.target.value}`);
  }
  return (
  <>
    <Header doUpdateBorough={doUpdateBorough} borough={borough} />
    <SchemesPage borough={borough} firebase={firebase}/>
  </>
  )
}

export default withRouter(Content);
