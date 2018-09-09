import { BUTTON_RIGHT_CARD } from 'constants/landingCarousel';

import LandingButton from './LandingButton';

loadTranslationObject({
  testText: 'test',
});

describe('<LandingButton />', () => {
  const onClickSpy = jest.fn();

  const wrapper = mountWithIntl(
    <LandingButton
      onClick={onClickSpy}
      currentPosition={{ movedLeft: false, movedRight: false }}
      itemName={BUTTON_RIGHT_CARD}
      translationPath="testText"
      isRightButton
    />
  );

  it('should render properly', () => {
    expect(wrapper.find('h3[data-test="landing-button-text"]').text()).toBe('test');
  });

  it('should invoke passed function on click', () => {
    wrapper.find('[data-test="landing-button"]').simulate('click');

    expect(onClickSpy).toHaveBeenCalled();
  });
});
