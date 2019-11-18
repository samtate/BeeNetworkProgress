import React from 'react';
import {
  Footer,
  FooterLinks,
  FooterLink
} from './styled.js';
import { withAuthentication } from '../Session';
import { AuthUserContext } from '../Session';

const FooterBar = ({ loading, firebase, authUser }) => {

  return (
    <Footer className={loading ? 'hidden' : ''}>
      <span>A non-profit site made by Sam Tate.</span>
      <FooterLinks>
        <FooterLink href="https://twitter.com/mcrcyclesam"><span className="socicon-twitter"></span></FooterLink>
        <FooterLink href="https://github.com/samtate/BeeNetworkProgress"><span className="socicon-github"></span></FooterLink>
      </FooterLinks>
      <AuthUserContext.Consumer>
        {authUser =>
          <>
           {authUser ? <button onClick={firebase.doSignOut}>Sign Out</button> : '' }
          </>
        }
      </AuthUserContext.Consumer>
    </Footer>
  );
}
export default withAuthentication(FooterBar);
