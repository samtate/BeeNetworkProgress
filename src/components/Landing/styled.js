import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  max-width: 1400px;
  min-width: 960px;
  margin: 0 auto;
  padding-top: 150px;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 980px) {
    min-width: 100%;
    max-width: 100%;
    padding-top: 60px;
  }
`;

export const Card = styled.div`
  width: 18%;
  margin: 10px calc(1%);
  height: 150px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 1px 1px 5px 0px rgba(64,64,64,0.4);
  transition: all 0.4s ease;
  &:hover {
    box-shadow: 2px 2px 5px 0px rgba(64,64,64,0.6);
    transform: scale(1.01)
  }

  @media only screen and (max-width: 980px) {
    width: 48%;
  }
`;

export const BoroughBackground = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

export const BoroughHeader = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  color: #404040;
`;
