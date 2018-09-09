import React from 'react';

import { generateSize } from 'helpers/landingCarousel';
import colors from 'styles/colors';
import Button from 'components/Atoms/Button/Button';
import Card from 'components/Atoms/Card/Card';
import Title from 'components/Atoms/Title/Title';

import { CardWrapper, ButtonCardWrapper } from '../styled';

const LandingButton = ({ itemName, currentPosition, onClick, translationPath, isRightButton }) => (
  <ButtonCardWrapper {...currentPosition} isRightButton={isRightButton}>
    <CardWrapper>
      <Card {...generateSize(itemName, currentPosition)} isCentered>
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
      </Card>
    </CardWrapper>
  </ButtonCardWrapper>
);

export default LandingButton;
