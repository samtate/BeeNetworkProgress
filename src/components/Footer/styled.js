import styled from 'styled-components'

export const Footer = styled.footer`
  font-family: 'Raleway';
  font-weight: 100;
  color: #404040;
  background-color: #ffe033;
  box-shadow: 3px 0px 5px 1px rgba(0,0,0,0.75);
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  z-index: 5;

  &.hidden {
    display: none;
  }

  @media only screen and (max-width: 980px) {
    width: 100%;
    height: 60px;
    text-align: center;
    position: inherit;
  }
`

export const FooterLinks = styled.div`
  padding: 5px;
`

export const FooterLink = styled.a`
  text-decoration: none;
  color: #404040;
  margin: 0 10px;
`
