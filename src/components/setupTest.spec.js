const add = (a, b) => a + b;

describe('add', () => {
  it('should add numbers properly', () => {
    expect(add(2, 2)).toBe(4);
  });
});
