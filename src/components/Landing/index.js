import React from 'react';
import { Container, Card, BoroughBackground, BoroughHeader } from './styled';
import { withRouter } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

const Landing = ({ history }) => {
  const boroughs = ['Bolton', 'Bury', 'Manchester', 'Oldham', 'Rochdale', 'Salford', 'Stockport', 'Tameside', 'Trafford', 'Wigan']
  const doUpdateHistory = (borough) => {
    history.push(`/${borough}`);
  }
  return (
   <>
    <Header />
      <Container>
        {boroughs.map(borough => (
          <Card key={borough} onClick={() => doUpdateHistory(borough)}>
            <BoroughBackground src={`/beenetwork/img/thumbs/${borough}.jpg`} />
            <BoroughHeader>{borough}</BoroughHeader>
          </Card>
        ))}
      </Container>
    <Footer />
   </>
  );
}

export default withRouter(Landing);
