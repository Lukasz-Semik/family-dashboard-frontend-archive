import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class LandingCarouselContainer extends PureComponent {
  static propTypes = {
    render: PropTypes.func.isRequired,
  };

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

  render() {
    const { isMovedRight, isMovedLeft } = this.state;
    const { render } = this.props;

    return render({
      isMovedRight,
      isMovedLeft,
      moveRight: this.moveRight,
      moveLeft: this.moveLeft,
      moveCenter: this.moveCenter,
    });
  }
}

export default LandingCarouselContainer;
