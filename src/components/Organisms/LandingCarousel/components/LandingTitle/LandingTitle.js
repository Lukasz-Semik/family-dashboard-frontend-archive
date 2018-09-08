import React from 'react';
import PropTypes from 'prop-types';

import colors from 'styles/colors';
import Card from 'components/Atoms/Card/Card';
import Title from 'components/Atoms/Title/Title';

const LandingTitle = ({ isMovedRight, isMovedLeft }) => {
  let translationPath = 'landing.titles.signIn';
  if (isMovedRight) translationPath = 'landing.titles.welcome';
  if (isMovedLeft) translationPath = 'landing.titles.signUp';

  return (
    <Card width={450} hasMarginBottomMd isCentered hasDefaultPadding>
      <Title
        data-test="landing-title"
        tag="h2"
        color={colors.mainOrange}
        translationPath={translationPath}
        isUppercased
        isSmall
        isCentered
      />
    </Card>
  );
};

LandingTitle.propTypes = {
  isMovedRight: PropTypes.bool,
  isMovedLeft: PropTypes.bool,
};

LandingTitle.defaultProps = {
  isMovedRight: false,
  isMovedLeft: false,
};

export default LandingTitle;
