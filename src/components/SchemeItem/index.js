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
    active: false || this.props.scheme.active,
    editMode: false || this.props.scheme.editMode,
    name: this.props.scheme.name,
    cost: this.props.scheme.cost,
    type: this.props.scheme.type,
    currentState: this.props.scheme.currentState,
    worksStart: this.props.scheme.worksStart,
    worksEnd: this.props.scheme.worksEnd,
    details: this.props.scheme.details,
    links: this.props.scheme.links
  }

  doToggleEditMode = () => {
    if (this.state.editMode) {
      this.setState({ editMode: false });
      this.onEditSave()
    } else {
      this.setState({ editMode: true });
      this.setState({ active: true });
    }
  }

  doToggleActive = () => {
    this.setState({ active: !this.state.active });
    if (this.state.editMode) {
      this.setState({ editMode: false });
      this.onEditSave();
    }
  }

  onEditChangeText = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onChangeLinks = (e,i) => {
    let newLinks = [...this.state.links]
    if (e.target.name === 'title') newLinks[i].title=e.target.value;
    if (e.target.name === 'href') newLinks[i].href=e.target.value;
    this.setState({ links: newLinks })
  }

  addLink = () => {
    const newLinks = [...this.state.links]
    const add = { title: '', href: '' }
    newLinks.push(add)
    this.setState({ links: newLinks })
  }

  onEditSave() {
    const schemeObject = {
      name: this.state.name,
      cost: this.state.cost,
      type: this.state.type,
      currentState: Number(this.state.currentState),
      worksStart: this.state.worksStart,
      worksEnd: this.state.worksEnd,
      details: this.state.details,
      links: this.state.links,
    }
    this.props.onEditRecipe(this.props.borough, this.props.schemeId, schemeObject, this.props.firebase)
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
              placeholder="Scheme Name..."
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
                placeholder="Scheme Cost..."
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
                placeholder="Scheme Type..."
                value={this.state.type}
                onChange={e => this.onEditChangeText(e)}
              />
            )}
          </StatsBox>
          <StateBox>
            <StateHeader>Current State:</StateHeader>
            {!this.state.editMode ? (
              <>
                <StateContent>
                  {(scheme.currentState === 1 && scheme.links[1]) ? (
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
              </>
            ) : (
              <input
              name="currentState"
              placeholder="Current State (0 - 6)"
              value={this.state.currentState}
              onChange={e => this.onEditChangeText(e)}
              />
            )}
          </StateBox>
          <Box>
            <WorksHeader>Works {scheme.currentState >= 4? `Started`:`Start`}:</WorksHeader>
            {!this.state.editMode ? (
              <WorksContent>{scheme.worksStart}</WorksContent>
            ) : (
              <input
                name="worksStart"
                placeholder="Works Start..."
                value={this.state.worksStart}
                onChange={e => this.onEditChangeText(e)}
              />
            )}
          </Box>
          <Box>
            <WorksHeader>Works {scheme.currentState === 5? `Ended`:`End`}:</WorksHeader>
            {!this.state.editMode ? (
              <WorksContent>{scheme.worksEnd}</WorksContent>
            ) : (
              <input
                name="worksEnd"
                placeholder="Works End..."
                value={this.state.worksEnd}
                onChange={e => this.onEditChangeText(e)}
              />
            )}
          </Box>
          <MoreInfoContainer>
            <MoreInfoBtn
              onClick={this.doToggleActive}
              className={this.state.active ? 'active' : ''}
            />
            {authUser ? (
              <button onClick={this.doToggleEditMode}>{!this.state.editMode ? 'Edit' : 'Save'}</button>
            ) : ('')}
          </MoreInfoContainer>
        </SchemeSummary>
        <InfoBox className={this.state.active ? 'active' : ''}>
          <SchemeDetails>
            <SchemeDetailsHeader>Scheme Details:</SchemeDetailsHeader>
            {!this.state.editMode ? (
              <SchemeDetailsContent>{scheme.details}</SchemeDetailsContent>
            ) : (
              <textarea
                name="details"
                placeholder="Scheme Details..."
                value={this.state.details}
                onChange={e => this.onEditChangeText(e)}
              />
            )}
          </SchemeDetails>
          <SchemeLinks>
            <SchemeLinksHeader>Scheme Links:</SchemeLinksHeader>
            {!this.state.editMode ? (
              <>
                {scheme.links ? scheme.links.map(link => (
                    <SchemeLinksList key={link.title}>
                      <SchemeLinkLi>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">{link.title}</a>
                      </SchemeLinkLi>
                    </SchemeLinksList>
                  )
                ) : (
                  <SchemeLinksHeader>No links yet!</SchemeLinksHeader>
                )}
              </>
            ) : (
              <>
                {this.state.links.map((link, i) =>
                  <React.Fragment key={link.title}>
                    <input
                      name="title"
                      placeholder="Hyperlink Title..."
                      value={this.state.links[i].title}
                      onChange={(e) => this.onChangeLinks(e,i)}
                    />
                    <input
                      name="href"
                      placeholder="Hyperlink Path..."
                      value={this.state.links[i].href}
                      onChange={(e) => this.onChangeLinks(e,i)}
                    />
                  </React.Fragment>
                )}
                <button onClick={() => this.addLink()}>Add</button>
              </>
            )}
          </SchemeLinks>
        </InfoBox>
      </SchemeBox>
    )
  }
}
export default SchemeItem;
