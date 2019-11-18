import React from 'react';

import Typography from '@material-ui/core/Typography';
import SignInPage from '../SignIn';

const LoggedOut = () => (
  <>
    <Typography variant="h4" gutterBottom>
      Logged Out
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      Please log in to use this app.
    </Typography>
    <SignInPage />
  </>
);
export default LoggedOut;
