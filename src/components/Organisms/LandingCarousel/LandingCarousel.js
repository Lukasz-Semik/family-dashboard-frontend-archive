import React from 'react';

import { generateSize } from 'helpers/landingCarousel';
import {
  CONTENT_LEFT_CARD,
  CONTENT_RIGHT_CARD,
  BUTTON_LEFT_CARD,
  BUTTON_RIGHT_CARD,
} from 'constants/landingCarousel';
import { Column, Row } from 'components/Atoms/Grid/Grid';
import Card from 'components/Atoms/Card/Card';
import Button from 'components/Atoms/Button/Button';

import LandingCarouselContainer from './LandingCarouselContainer';
import { CardWrapper, MainWrapper, FlyingWrapper } from './components/styled';
import LandingTitle from './components/LandingTitle/LandingTitle';
import LandingButton from './components/LandingButton/LandingButton';

const LandingCarousel = ({ isMovedRight, isMovedLeft, moveRight, moveLeft, moveCenter }) => {
  const currentPosition = { isMovedRight, isMovedLeft };

  return (
    <div>
      <LandingTitle {...currentPosition} />

      <MainWrapper>
        <FlyingWrapper isMovedRight={isMovedRight} isMovedLeft={isMovedLeft}>
          <LandingButton
            onClick={moveLeft}
            currentPosition={currentPosition}
            itemName={BUTTON_LEFT_CARD}
            translationPath="landing.titles.signUp"
          />

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

          <LandingButton
            onClick={moveRight}
            currentPosition={currentPosition}
            itemName={BUTTON_RIGHT_CARD}
            translationPath="landing.titles.welcome"
            isRightButton
          />
        </FlyingWrapper>
      </MainWrapper>
    </div>
  );
};

export { LandingCarousel as LandingCarouselUnwrapped };

const render = containerProps => <LandingCarousel {...containerProps} />;
export default props => <LandingCarouselContainer render={render} {...props} />;
