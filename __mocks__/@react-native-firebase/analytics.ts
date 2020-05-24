const analytics = jest.fn(() => ({
  logAppOpen: jest.fn(),
  logSelectContent: jest.fn(),
  setCurrentScreen: jest.fn(),
}));

export default analytics;
