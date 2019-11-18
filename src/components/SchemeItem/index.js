import React from 'react';

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

const SchemeItem = ({ scheme }) => {
  const [active, setActive] = React.useState(false);

  const doToggleActive = () => {
    setActive(!active);
  }

  const getStateText = currentState => {
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

  return (
    <SchemeBox className={active ? 'active' : ''}>
      <SchemeSummary>
        <SchemeName>{scheme.name}</SchemeName>
        <StatsBox>
          <StatsHeader>Cost:</StatsHeader>
          <StatsP>{scheme.cost}</StatsP>
          <StatsHeader>Type:</StatsHeader>
          <StatsP>{scheme.type}</StatsP>
        </StatsBox>
        <StateBox>
          <StateHeader>Current State:</StateHeader>
          <StateContent>
            {scheme.currentState === 1 ? (
              <>
                <a href={scheme.links[1].href} target="_blank" rel="noopener noreferrer">{getStateText(scheme.currentState)}</a>
              </>
            ) : (
              <>
                {getStateText(scheme.currentState)}
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
            onClick={doToggleActive}
            className={active ? 'active' : ''}
          />
        </MoreInfoContainer>
      </SchemeSummary>
      <InfoBox className={active ? 'active' : ''}>
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
export default SchemeItem;
