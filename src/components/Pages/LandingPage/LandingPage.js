import React, { Fragment } from 'react';
import styled from 'styled-components';

import Title from 'components/Atoms/Title/Title';
import LandingCarousel from 'components/Organisms/LandingCarousel/LandingCarousel';

const TitleWrapper = styled.div`
  margin: 15px 0 0 15px;
`;

const LandingPage = () => (
  <Fragment>
    <TitleWrapper>
      <Title isUppercased translationPath="main.familyDashboard" />
    </TitleWrapper>

    <LandingCarousel />
  </Fragment>
);

export default LandingPage;
