import React, { PureComponent } from 'react';
import styled from 'styled-components';

import colors from 'styles/colors';
import { mixinContentCenterFlex } from 'styles/mixins';
import { Column, Row } from 'components/Atoms/Grid/Grid';
import Card from 'components/Atoms/Card/Card';
import Button from 'components/Atoms/Button/Button';
import Title from 'components/Atoms/Title/Title';

const CardWrapper = styled.div`
  ${mixinContentCenterFlex};
  height: 100%;
`;

const MainWrapper = styled.div`
  max-width: 100%;
  position: relative;
  overflow-x: hidden;
  min-height: 406px;
`;

const FlyingWrapper = styled.div`
  position: absolute;
  width: 100%;
  transition: all 0.5s linear;
  top: 0;
  left: ${props => {
    if (props.isMovedRight) return '33.33%';
    if (props.isMovedLeft) return '-33.33%';
    return '0';
  }};
`;

const ButtonCardWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.5s linear;
  width: 33.33%;
  left: ${props => (props.isRightButton ? '100%' : '-33.33%')};
`;

const CONTENT_LEFT_CARD = 'main-left-card';
const CONTENT_RIGHT_CARD = 'main-right-card';
const BUTTON_LEFT_CARD = 'button-left-card';
const BUTTON_RIGHT_CARD = 'button-right-card';

class Carousel extends PureComponent {
  state = {
    isMovedRight: false,
    isMovedLeft: false,
  };

  moveRight = () => this.setState({ isMovedRight: true, isMovedLeft: false });

  moveLeft = () => this.setState({ isMovedLeft: true, isMovedRight: false });

  moveCenter = () => {
    const { isMovedLeft, isMovedRight } = this.state;
    if (isMovedLeft || isMovedRight) {
      this.setState({ isMovedLeft: false, isMovedRight: false });
    }
  };

  generateSize = item => {
    const { isMovedLeft, isMovedRight } = this.state;

    if (item === CONTENT_LEFT_CARD) {
      if (isMovedLeft) return { width: 100, height: 100 };
      if (isMovedRight) return { width: 450, height: 400 };
      return { width: 300, height: 300 };
    }

    if (item === CONTENT_RIGHT_CARD) {
      if (isMovedLeft) return { width: 450, height: 400 };
      if (isMovedRight) return { width: 100, height: 100 };
      return { width: 300, height: 300 };
    }

    if (item === BUTTON_LEFT_CARD || item === BUTTON_RIGHT_CARD) {
      if (isMovedLeft || isMovedRight) return { width: 300, height: 300 };
      return { width: 100, height: 100 };
    }

    if (isMovedLeft || isMovedRight) return { width: 300, height: 300 };
    return { width: 450, height: 400 };
  };

  render() {
    const { isMovedRight, isMovedLeft } = this.state;
    const isCentered = !isMovedLeft && !isMovedRight;

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
                <Button onClick={this.moveLeft}>
                  <Card {...this.generateSize(BUTTON_LEFT_CARD)} isCentered>
                    Form Placeholder
                  </Card>
                </Button>
              </CardWrapper>
            </ButtonCardWrapper>

            <Row>
              <Column isOneThird>
                <CardWrapper>
                  <Button onClick={this.moveRight}>
                    <Card {...this.generateSize(CONTENT_LEFT_CARD)}>dsa</Card>
                  </Button>
                </CardWrapper>
              </Column>

              <Column isOneThird>
                <CardWrapper>
                  <Button onClick={this.moveCenter} isButton={!isCentered}>
                    <Card {...this.generateSize()} isCentered>
                      Form Placeholder
                    </Card>
                  </Button>
                </CardWrapper>
              </Column>

              <Column isOneThird>
                <CardWrapper>
                  <Button onClick={this.moveLeft}>
                    <Card {...this.generateSize(CONTENT_RIGHT_CARD)}>dsad</Card>
                  </Button>
                </CardWrapper>
              </Column>
            </Row>

            <ButtonCardWrapper isMovedLeft={isMovedLeft} isRightButton>
              <CardWrapper>
                <Button onClick={this.moveRight}>
                  <Card {...this.generateSize(BUTTON_LEFT_CARD)} isCentered>
                    Form Placeholder
                  </Card>
                </Button>
              </CardWrapper>
            </ButtonCardWrapper>
          </FlyingWrapper>
        </MainWrapper>
      </div>
    );
  }
}

export default Carousel;
