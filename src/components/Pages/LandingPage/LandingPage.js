import React, { Fragment } from 'react';
import styled from 'styled-components';

import Title from 'components/Atoms/Title/Title';
import Carousel from 'components/Molecules/Carousel/Carousel';

const TitleWrapper = styled.div`
  margin: 15px 0 0 15px;
`;

const LandingPage = () => (
  <Fragment>
    <TitleWrapper>
      <Title isUppercased translationPath="main.familyDashboard" />
    </TitleWrapper>

    <Carousel />
  </Fragment>
);

export default LandingPage;
