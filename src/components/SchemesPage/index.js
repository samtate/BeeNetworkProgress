import React, { Component } from 'react';

import SchemeItem from '../SchemeItem';
import Footer from '../Footer'
import { BoroughHeader, BoroughImage, BoroughTitle, BoroughValue, Container, Content } from './styled'

import { withFirebase } from '../Firebase';

const SchemesPage = ({ borough, authUser }) => (
  <Content>
    <Schemes borough={borough} authUser={authUser} />
  </Content>
);

class SchemesBase extends Component {
  state = {
    loading: false,
    schemes: [''],
  };

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase
      .borough(this.props.borough)
      .on('value', snapshot => {
      const boroughObject = snapshot.val();
        if (boroughObject) {
            this.setState({
              borough: boroughObject,
              schemes: Object.values(boroughObject.schemes),
              loading: false,
            });
        } else {
          this.setState({ borough: null, loading: false });
        }
    });
  }

  componentWillUnmount() {
    this.props.firebase
    .borough(this.props.borough)
    .off();
  }

  countCash(borough) {
    let total = 0
    this.state.schemes.forEach(scheme => {
        const cost = scheme.cost.match(/\d+\.?\d*/)[0];
        total += Number(cost);
    })
    return total.toFixed(1);
}

  render() {
    const { borough, schemes, loading } = this.state;
    const { authUser } = this.props
    console.log(authUser)

    return (
      <>
      {loading ? (
        <>
          <div className="loader">
            <div className="lds-ripple"><div></div><div></div></div>
            <span>Loading...</span>
          </div>
        </>
      ) : (
        <>
          {borough ? (
            <>
              <BoroughHeader>
                <BoroughImage src={`/beenetwork/img/headers/${borough.title}.png`} />
                <BoroughTitle>{borough.title}</BoroughTitle>
                <BoroughValue>Total Schemes Value: £{this.countCash(borough)}m</BoroughValue>
              </BoroughHeader>
              <SchemeList schemes={schemes} loading={loading} authUser={authUser} />
            </>
          ) : (
            <></>
          )}
        </>
        )}
      </>
    );
  }
}

function SchemeList({ schemes, loading, authUser }) {
  return (
    <>
      <Container>
        {schemes ? (
          schemes.map((scheme, i) => (
            <SchemeItem
              scheme={scheme}
              key={i}
              authUser={authUser}
            />
          ))) : ('')
        }
      </Container>
      <Footer loading={loading} />
    </>
  )
}

const Schemes = withFirebase(SchemesBase);

export default SchemesPage;
