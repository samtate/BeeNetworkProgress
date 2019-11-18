import React, { Component } from 'react';

import {
  SchemeBox,
  SchemeSummary,
  SchemeName,
  StatsBox,
  StatsHeader,
  StatsP,
  Box,
  StateBox,
  StateHeader,
  StateContent,
  ProgressBarContainer,
  ProgressBar,
  ProgressLi,
  WorksHeader,
  WorksContent,
  MoreInfoContainer,
  MoreInfoBtn,
  InfoBox,
  SchemeLinksHeader,
  SchemeLinksList,
  SchemeLinkLi,
  SchemeDetails,
  SchemeDetailsHeader,
  SchemeDetailsContent,
  SchemeLinks
} from './styled';

class SchemeItem extends Component {
  state = {
    active: false,
    editMode: false,
    name: this.props.scheme.name,
    cost: this.props.scheme.cost,
    type: this.props.scheme.type,
    currentState: this.props.currentState,
    worksStart: this.props.worksStart,
    worksEnd: this.props.worksEnd,
  }

  doToggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  }

  doToggleActive = () => {
    this.setState({ active: !this.state.active });
  }

  onEditChangeText = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  getStateText = currentState => {
    switch (currentState) {
        case 0:
          return 'Design, Awaiting Consultation'
        case 1:
          return `Consultation`
        case 2:
          return 'Awaiting Consultation Report'
        case 3:
          return 'Awaiting Construction'
        case 4:
          return 'Construction'
        case 5:
          return 'Built'
        default:
          return;
    }
  }
  render() {
    const {scheme, authUser} = this.props
    return (
      <SchemeBox className={this.state.active ? 'active' : ''}>
        <SchemeSummary>
          {!this.state.editMode ? (
          <SchemeName>{scheme.name}</SchemeName>
          ) : (
            <input
              name="name"
              value={this.state.name}
              onChange={e => this.onEditChangeText(e)}
            />
          )}
          <StatsBox>
            <StatsHeader>Cost:</StatsHeader>
            {!this.state.editMode ? (
              <StatsP>{scheme.cost}</StatsP>
            ) : (
              <input
                name="cost"
                value={this.state.cost}
                onChange={e => this.onEditChangeText(e)}
              />
            )}
            <StatsHeader>Type:</StatsHeader>
            {!this.state.editMode ? (
              <StatsP>{scheme.type}</StatsP>
            ) : (
              <input
                name="type"
                value={this.state.type}
                onChange={e => this.onEditChangeText(e)}
              />
            )}
          </StatsBox>
          <StateBox>
            <StateHeader>Current State:</StateHeader>
            <StateContent>
              {scheme.currentState === 1 ? (
                <>
                  <a href={scheme.links[1].href} target="_blank" rel="noopener noreferrer">{this.getStateText(scheme.currentState)}</a>
                </>
              ) : (
                <>
                  {this.getStateText(scheme.currentState)}
                </>
              )}
            </StateContent>
            <ProgressBarContainer>
              <ProgressBar>
                {[...Array(6).keys()].map(i => (
                  <ProgressLi key={i} className={scheme.currentState===i ? 'active' : ''} />
                ))}
              </ProgressBar>
            </ProgressBarContainer>
          </StateBox>
          <Box>
            <WorksHeader>Works {scheme.currentState >= 4? `Started`:`Start`}:</WorksHeader>
            <WorksContent>{scheme.worksStart}</WorksContent>
          </Box>
          <Box>
            <WorksHeader>Works {scheme.currentState === 5? `Ended`:`End`}:</WorksHeader>
            <WorksContent>{scheme.worksEnd}</WorksContent>
          </Box>
          <MoreInfoContainer>
            <MoreInfoBtn
              onClick={this.doToggleActive}
              className={this.state.active ? 'active' : ''}
            />
            {authUser ? (
              <button onClick={this.doToggleEditMode}>Edit</button>
            ) : ('')}
          </MoreInfoContainer>
        </SchemeSummary>
        <InfoBox className={this.state.active ? 'active' : ''}>
          <SchemeDetails>
            <SchemeDetailsHeader>Scheme Details:</SchemeDetailsHeader>
            <SchemeDetailsContent>{scheme.details}</SchemeDetailsContent>
          </SchemeDetails>
          <SchemeLinks>
            <SchemeLinksHeader>Scheme Links:</SchemeLinksHeader>
            {scheme.links ? scheme.links.map(link =>
              <SchemeLinksList key={link.title}>
                <SchemeLinkLi>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">{link.title}</a>
                </SchemeLinkLi>
              </SchemeLinksList>
            ) : (
              <SchemeLinksHeader>No links yet!</SchemeLinksHeader>
            )}
          </SchemeLinks>
        </InfoBox>
      </SchemeBox>
    )
  }
}
export default SchemeItem;
