import React from 'react';
import {
  Footer,
  FooterLinks,
  FooterLink
} from './styled.js';

const FooterBar = ({ loading }) => {

  return (
    <Footer className={loading ? 'hidden' : ''}>
      <span>A non-profit site made by Sam Tate.</span>
      <FooterLinks>
        <FooterLink href="https://twitter.com/mcrcyclesam"><span className="socicon-twitter"></span></FooterLink>
        <FooterLink href="https://github.com/samtate/BeeNetworkProgress"><span className="socicon-github"></span></FooterLink>
      </FooterLinks>
    </Footer>
  );
}
export default FooterBar;
