import React, { Component } from 'react';
import uuid from 'react-uuid';

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
              schemeIds: Object.keys(boroughObject.schemes),
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

  onEditRecipe(borough, id, schemeObject, firebase) {
    firebase
      .scheme(borough.title.toLowerCase(), id)
      .set(schemeObject);
  }

  addScheme() {
    const newSchemeIds = [...this.state.schemeIds];
    newSchemeIds.push(uuid());
    this.setState({ schemeIds: newSchemeIds });

    const newSchemes = [...this.state.schemes];
    newSchemes.push({
      cost: '0',
      currentState: '',
      details: '',
      name: '',
      type: '',
      worksStart: '',
      worksEnd: '',
      links: [ {href: '', title: ''} ],
      editMode: true,
      active: true,
    });
    this.setState({ schemes: newSchemes });
  }

  render() {
    const { borough, schemes, schemeIds, loading } = this.state;
    const { authUser } = this.props

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
              <SchemeList schemes={schemes} schemeIds={schemeIds} addScheme={() => this.addScheme()} loading={loading} authUser={authUser} borough={borough} onEditRecipe={this.onEditRecipe} firebase={this.props.firebase} />
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

function SchemeList({ schemes, schemeIds, addScheme, borough, onEditRecipe, loading, authUser, firebase }) {
  return (
    <>
      <Container>
        {schemes ? (
          schemes.map((scheme, i) => (
            <SchemeItem
              scheme={scheme}
              schemeId={schemeIds[i]}
              borough={borough}
              firebase={firebase}
              key={i}
              authUser={authUser}
              onEditRecipe={onEditRecipe}
            />
          ))) : ''
        }
        {authUser ? (
          <button onClick={addScheme}>Add Scheme...</button>
        ) : ''}
      </Container>
      <Footer loading={loading} />
    </>
  )
}

const Schemes = withFirebase(SchemesBase);

export default SchemesPage;
