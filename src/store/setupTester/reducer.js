const initialState = {
  test: 'testing setup of redux',
};

const setupTester = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default setupTester;
