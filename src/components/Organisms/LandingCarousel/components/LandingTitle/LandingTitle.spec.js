import LandingTitle from './LandingTitle';

describe('<LandingTitle />', () => {
  it('Should render Landing Title with proper message for center position', () => {
    const wrapper = shallowWithIntl(<LandingTitle />);

    expect(wrapper.find('Title[data-test="landing-title"]').prop('translationPath')).toBe(
      'landing.titles.signIn'
    );
  });

  it('Should render Landing Title with proper message for right position', () => {
    const wrapper = shallowWithIntl(<LandingTitle isMovedRight />);

    expect(wrapper.find('Title[data-test="landing-title"]').prop('translationPath')).toBe(
      'landing.titles.welcome'
    );
  });

  it('Should render Landing Title with proper message for left position', () => {
    const wrapper = shallowWithIntl(<LandingTitle isMovedLeft />);

    expect(wrapper.find('Title[data-test="landing-title"]').prop('translationPath')).toBe(
      'landing.titles.signUp'
    );
  });
});
