import React from 'react';

import { generateSize } from 'helpers/landingCarousel';
import {
  CONTENT_LEFT_CARD,
  CONTENT_RIGHT_CARD,
  BUTTON_LEFT_CARD,
  BUTTON_RIGHT_CARD,
} from 'constants/landingCarousel';
import colors from 'styles/colors';
import { Column, Row } from 'components/Atoms/Grid/Grid';
import Card from 'components/Atoms/Card/Card';
import Button from 'components/Atoms/Button/Button';
import Title from 'components/Atoms/Title/Title';

import LandingCarouselContainer from './LandingCarouselContainer';
import { CardWrapper, MainWrapper, FlyingWrapper, ButtonCardWrapper } from './components/styled';

const LandingCarousel = ({ isMovedRight, isMovedLeft, moveRight, moveLeft, moveCenter }) => {
  const currentPosition = { isMovedRight, isMovedLeft };

  return (
    <div>
      <Card width={450} hasMarginBottomMd isCentered hasDefaultPadding>
        <Title tag="h2" color={colors.mainOrange} isUppercased isSmall isCentered>
          Sign Up
        </Title>
      </Card>

      <MainWrapper>
        <FlyingWrapper isMovedRight={isMovedRight} isMovedLeft={isMovedLeft}>
          <ButtonCardWrapper isMovedRight={isMovedRight}>
            <CardWrapper>
              <Card {...generateSize(BUTTON_LEFT_CARD, currentPosition)} isCentered>
                <Button onClick={moveLeft} isFillingParent>
                  Button Left
                </Button>
              </Card>
            </CardWrapper>
          </ButtonCardWrapper>

          <Row>
            <Column isOneThird>
              <CardWrapper>
                <Card {...generateSize(CONTENT_LEFT_CARD, currentPosition)}>
                  <Button onClick={moveRight} isFillingParent>
                    dsa
                  </Button>
                </Card>
              </CardWrapper>
            </Column>

            <Column isOneThird>
              <CardWrapper>
                <Card {...generateSize(null, currentPosition)} isCentered>
                  <Button onClick={moveCenter} isFillingParent>
                    Form Placeholder
                  </Button>
                </Card>
              </CardWrapper>
            </Column>

            <Column isOneThird>
              <CardWrapper>
                <Card {...generateSize(CONTENT_RIGHT_CARD, currentPosition)}>
                  <Button onClick={moveLeft} isFillingParent>
                    dsad
                  </Button>
                </Card>
              </CardWrapper>
            </Column>
          </Row>

          <ButtonCardWrapper isMovedLeft={isMovedLeft} isRightButton>
            <CardWrapper>
              <Card {...generateSize(BUTTON_RIGHT_CARD, currentPosition)} isCentered>
                <Button onClick={moveRight} isFillingParent>
                  Form Placeholder
                </Button>
              </Card>
            </CardWrapper>
          </ButtonCardWrapper>
        </FlyingWrapper>
      </MainWrapper>
    </div>
  );
};

export { LandingCarousel as LandingCarouselUnwrapped };

const render = containerProps => <LandingCarousel {...containerProps} />;
export default props => <LandingCarouselContainer render={render} {...props} />;
