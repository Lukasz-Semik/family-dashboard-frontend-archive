import React from 'react';

import { generateSize } from 'helpers/landingCarousel';
import { CONTENT_CENTER_CARD } from 'constants/landingCarousel';
import colors from 'styles/colors';
import Card from 'components/Atoms/Card/Card';
import Button from 'components/Atoms/Button/Button';
import Title from 'components/Atoms/Title/Title';

import { CardWrapper, AnimatedWrapper, AnimatedButtonWrapper } from '../styled';

const LandingElement = ({
  children,
  onClick,
  elementName,
  currentPosition,
  buttonTranslationPath,
}) => {
  const { isMovedRight, isMovedLeft } = currentPosition;
  const isInCenterPosition = !isMovedRight && !isMovedLeft;
  const isButton = elementName === CONTENT_CENTER_CARD ? !isInCenterPosition : isInCenterPosition;

  return (
    <CardWrapper>
      <Card {...generateSize(elementName, currentPosition)}>
        {isButton ? (
          <AnimatedButtonWrapper>
            <Button
              data-test="landing-element-button"
              onClick={onClick}
              color={colors.mainBlue}
              hasUnderscoreMarker
              isFillingParent
            >
              <Title
                data-test="landing-element-text"
                tag="h3"
                translationPath={buttonTranslationPath}
                isMedium
              />
            </Button>
          </AnimatedButtonWrapper>
        ) : (
          <AnimatedWrapper data-test="landing-element-children-wrapper">{children}</AnimatedWrapper>
        )}
      </Card>
    </CardWrapper>
  );
};

export default LandingElement;
