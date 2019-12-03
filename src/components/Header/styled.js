import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  background-color: #e03e52;
  box-shadow: 3px 0px 5px 1px rgba(0,0,0,0.75);
  z-index: 10;
  position: fixed;
  color: #fff;

  @media only screen and (max-width: 980px) {
    height: 50px;
  }
`;

export const Container = styled.div`
  width: 70%;
  max-width: 1400px;
  min-width: 960px;
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 980px) {
    min-width: 300px;
    height: 50px;
    width: 95%
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoType = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-left: 15px;

  @media only screen and (max-width: 980px) {
    font-size: 15px;
    width: 150px;
  }
`;
