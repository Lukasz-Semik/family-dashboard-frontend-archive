import React, { Fragment } from 'react';
import styled from 'styled-components';

import colors from 'styles/colors';
import { mixinContentCenterFlex } from 'styles/mixins';
import Title from 'components/Atoms/Title/Title';
import { Column, Row } from 'components/Atoms/Grid/Grid';
import Card from 'components/Atoms/Card/Card';

const TitleWrapper = styled.div`
  margin: 15px 0 0 15px;
`;

const HugeButtonPlaceholder = styled.div`
  width: 300px;
  height: 300px;
`;

const HugeButtonWrapper = styled.div`
  ${mixinContentCenterFlex};
  height: 100%;
  padding: 0 15px;
`;

const LandingPage = () => (
  <Fragment>
    <TitleWrapper>
      <Title isUppercased>Family Dashboard</Title>
    </TitleWrapper>

    <Card width={450} hasMarginBottomMd isCentered>
      <Title tag="h2" color={colors.mainOrange} isUppercased isSmall isCentered>
        Sign Up
      </Title>
    </Card>

    <Row>
      <Column isQuarter>
        <HugeButtonWrapper>
          <Card width={300} height={300}>
            <HugeButtonPlaceholder />
          </Card>
        </HugeButtonWrapper>
      </Column>

      <Column isHalf>
        <Card width={450} height={400} isCentered>
          Form Placeholder
        </Card>
      </Column>

      <Column isQuarter>
        <HugeButtonWrapper>
          <Card width={300} height={300}>
            <HugeButtonPlaceholder />
          </Card>
        </HugeButtonWrapper>
      </Column>
    </Row>
  </Fragment>
);

export default LandingPage;
