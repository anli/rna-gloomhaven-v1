const remoteConfig = jest.fn(() => ({
  getValue: jest.fn().mockReturnValue({
    value: 'first\nSecond\nThird',
  }),
}));

export default remoteConfig;
