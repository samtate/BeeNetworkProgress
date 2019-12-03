import styled from 'styled-components'

export const SchemeBox = styled.div`
  border-bottom: 1px #38618C solid;
  color: #38618C;
  transition: all 0.3s ease;
  max-height: 100px;
  overflow: hidden;
  &:first-of-type {
    margin-top: 10px;
    border-top: 1px #38618C solid;
  }

  &.active {
    max-height: 600px;
  }

  @media only screen and (max-width: 980px) {
    max-height: 300px;

    &.active {
      max-height: 1000px;
    }
  }

`;

export const SchemeSummary = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 980px) {
    height: 300px;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;
  }
`;

export const SchemeName = styled.h2`
  width: 150px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 20px;
  text-align: center;

  @media only screen and (max-width: 980px) {
    order: 1;
    width: 50%;
    margin: 0;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 980px) {
    order: 4;
    padding-bottom: 10px;
    width: 33%
  }
`;

export const StatsBox = styled(Box)`
  width: 170px;

  @media only screen and (max-width: 980px) {
    order: 3;
  }
`;

export const StatsP = styled.p`
  margin: 0;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  text-align: center;
  &:first-of-type {
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 980px) {
    font-size: 12px;
  }
`;

export const StateBox = styled(Box)`
  @media only screen and (max-width: 980px) {
    order: 2;
    width: 50%;
    margin: 0;
  }
`;

export const BoxHeader = styled.span`
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  text-align: center;
`;

export const StatsHeader = styled(BoxHeader)`
  margin: 0;
`;

export const BoxContent = styled.span`
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  text-align: center;
`;

export const StateHeader = styled(BoxHeader)`
  width: 300px;

  @media only screen and (max-width: 980px) {
    width: 90%;
  }
`;

export const StateContent = styled(BoxContent)`
  font-size: 18px;
  width: 300px;

  @media only screen and (max-width: 980px) {
    width: 90%;
    font-size: 15px;
  }
`;

export const ProgressBarContainer = styled.div`
  @media only screen and (max-width: 980px) {
    width: 80%;
    max-width: 300px;
  }
`;

export const ProgressBar = styled.ul`
  width: 300px;
  padding: 0;
  margin-top: 10px;

  @media only screen and (max-width: 980px) {
    width: 100%;
  }
`;

export const ProgressLi = styled.li`
  list-style-type: none;
  width: 16.65%;
  float: left;
  font-size: 12px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  color: #7d7d7d;

  &:before {
    width: 20px;
    height: 20px;
    content: '•';
    line-height: 20px;
    border: 2px solid #7d7d7d;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    background-color: white;
    position: relative;
    z-index: 1;
  }

  &:after {
    width: 100%;
    height: 2px;
    content: '';
    position: absolute;
    background-color: #7d7d7d;
    top: 10px;
    left: -50%;
    z-index: 0;
  }

  &:first-child:after {
    content: none;
  }

  &.active:before {
    border-color: #55b776;
    background-color: #55b776;
    color: #fff;
  }

  &.active + :after {
    background-color: #55b776;
  }
`;

export const WorksHeader = styled(BoxHeader)`
  width: 120px;
`;

export const WorksContent = styled(BoxContent)`
  width: 100px;
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 10px;
`;

export const MoreInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;

  @media only screen and (max-width: 980px) {
    order: 5;
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
    margin-right: 0;
  }
`;

export const MoreInfoBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 0;
  background-color: #e03e52;
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: center;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTBoLTEwdi0xMGgtNHYxMGgtMTB2NGgxMHYxMGg0di0xMGgxMHoiLz48L3N2Zz4=);
  transition: 0.3s ease all;
  outline: none;

  &.active {
    background-color: red !important;
    transform: rotate(45deg) !important;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  max-height: 200px;
  padding: 0 60px;
  font-family: 'Raleway';
  opacity: 0;
  transition: 0.6s ease all;

  &.active {
    opacity: 1;
  }

  @media only screen and (max-width: 980px) {
    max-height: 600px;
    flex-direction: column;
  }
`;

export const SchemeLinksHeader = styled.h3`
`;

export const SchemeLinksList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const SchemeLinkLi = styled.li`
`;

export const SchemeDetails = styled.div`
  width: 70%;
  padding-right: 40px;

  @media only screen and (max-width: 980px) {
    width: 100%;
  }
`;

export const SchemeDetailsHeader = styled.h3`
`;

export const SchemeDetailsContent = styled.p`
  font-size: 14px;
`;

export const SchemeLinks = styled.div`
  width: 30%;
  @media only screen and (max-width: 980px) {
    width: 100%;
  }
`;
export const EditButton = styled.button`
  width: 50px;
  margin-top: 10px;
  color: #38618C;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #38618C;
  background: 0;
`;

export const EditInput = styled.input`
  color: #38618C;
  width: 100px;
`;
export const EditTextArea = styled.textarea`
  color: #38618C;
  width: 90%;
  height: 90px;
  font-size: 14px;
`;
