import { CONTENT_CENTER_CARD, CONTENT_LEFT_CARD } from 'constants/landingCarousel';

import LandingElement from './LandingElement';

loadTranslationObject({
  testText: 'test',
});

describe('<LandingElement />', () => {
  const onClickSpy = jest.fn();

  describe('not center element', () => {
    const wrapper = mountWithIntl(
      <LandingElement
        onClick={onClickSpy}
        elementName={CONTENT_LEFT_CARD}
        currentPosition={{ isMovedLeft: false, isMovedRight: false }}
        buttonTranslationPath="testText"
      >
        <div>EXAMPLE CARD</div>
      </LandingElement>
    );

    it('should render button with proper h3', () => {
      expect(wrapper.find('h3[data-test="landing-element-text"]').text()).toBe('test');
    });

    it('should invoke passed function when clicked', () => {
      wrapper.find('[data-test="landing-element-button"]').simulate('click');
      expect(onClickSpy).toHaveBeenCalled();
    });

    it('should render children if is not center position', () => {
      wrapper.setProps({ currentPosition: { isMovedLeft: true } });

      // it's finding 3 due to fact that is a styled component.
      expect(wrapper.find('[data-test="landing-element-children-wrapper"]')).toHaveLength(3);
    });
  });

  describe('center element', () => {
    const wrapper = mountWithIntl(
      <LandingElement
        onClick={onClickSpy}
        elementName={CONTENT_CENTER_CARD}
        currentPosition={{ isMovedLeft: false, isMovedRight: false }}
        buttonTranslationPath="testText"
      >
        <div>EXAMPLE CARD</div>
      </LandingElement>
    );

    it('should render children if is not center position', () => {
      // it's finding 3 due to fact that is a styled component.
      expect(wrapper.find('[data-test="landing-element-children-wrapper"]')).toHaveLength(3);
    });

    it('should render button with proper h3', () => {
      wrapper.setProps({ currentPosition: { isMovedLeft: true } });

      expect(wrapper.find('h3[data-test="landing-element-text"]').text()).toBe('test');
    });
  });
});
