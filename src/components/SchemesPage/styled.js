import styled from 'styled-components'

export const BoroughHeader = styled.div`
  width: 100%;
  max-height: 250px;
  height: 35vh;
  position: relative;
  box-shadow: 3px 0px 5px 1px rgba(0,0,0,0.75);

  @media only screen and (max-width: 980px) {
    height: 30vh;
  }
`;

export const BoroughImage = styled.img`
  position: absolute;
  filter: brightness(0.6);
  top: 0;
  object-fit: cover;
  width: 100%;
  max-height: 250px;
  height: 35vh;

  @media only screen and (max-width: 980px) {
    height: 30vh;
  }
`;

export const BoroughTitle = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 40px;
  text-transform: capitalize;
  color: white;
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translate(-50%,-50%);
  margin: 0;
  text-shadow: 3px 3px 5px #000000;
`;

export const BoroughValue = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 32px;
  color: white;
  position: absolute;
  top: 66%;
  left: 50%;
  transform: translate(-50%,-50%);
  margin: 0;
  text-shadow: 3px 3px 5px #000000;
  width: 100%;
  text-align: center;

  @media only screen and (max-width: 980px) {
    font-size: 20px;
  }
`;

export const Container = styled.div`
  width: 960px;
  margin: 0 auto;

  @media only screen and (max-width: 980px) {
    width: 100%;
  }
`;


export const Content = styled.div`
  padding-top: 100px;
  padding-bottom: 80px;

  @media only screen and (max-width: 980px) {
    padding-bottom: 0px;
    padding-top: 50px;
  }
`;
