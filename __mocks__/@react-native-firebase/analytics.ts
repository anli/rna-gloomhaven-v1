const analytics = jest.fn(() => ({
  logAppOpen: jest.fn(),
  logSelectContent: jest.fn(),
  setCurrentScreen: jest.fn(),
  logEvent: jest.fn(),
}));

export default analytics;
