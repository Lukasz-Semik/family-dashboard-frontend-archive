import React from 'react';

import { generateSize } from 'helpers/landingCarousel';
import colors from 'styles/colors';
import Button from 'components/Atoms/Button/Button';
import Card from 'components/Atoms/Card/Card';
import Title from 'components/Atoms/Title/Title';

import { CardWrapper, ButtonCardWrapper, AnimatedButtonWrapper } from '../styled';

const LandingButton = ({
  elementName,
  currentPosition,
  onClick,
  translationPath,
  isRightButton,
}) => {
  const { isMovedRight, isMovedLeft } = currentPosition;
  const isVisible = isMovedRight || isMovedLeft;

  return (
    <ButtonCardWrapper {...currentPosition} isRightButton={isRightButton}>
      <CardWrapper>
        <Card {...generateSize(elementName, currentPosition)} isCentered>
          {isVisible ? (
            <AnimatedButtonWrapper>
              <Button
                data-test="landing-button"
                onClick={onClick}
                color={colors.mainBlue}
                hasUnderscoreMarker
                isFillingParent
              >
                <Title
                  data-test="landing-button-text"
                  tag="h3"
                  translationPath={translationPath}
                  isMedium
                />
              </Button>
            </AnimatedButtonWrapper>
          ) : (
            <Button
              data-test="landing-button"
              onClick={onClick}
              color={colors.mainBlue}
              hasUnderscoreMarker
              isFillingParent
            >
              <Title
                data-test="landing-button-text"
                tag="h3"
                translationPath={translationPath}
                isMedium
              />
            </Button>
          )}
        </Card>
      </CardWrapper>
    </ButtonCardWrapper>
  );
};

export default LandingButton;
