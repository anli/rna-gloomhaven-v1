export const mockNavigate = jest.fn();

const useNavigation = () => ({
  navigate: mockNavigate,
  goBack: jest.fn(),
  canGoBack: jest.fn().mockReturnValue(true),
});

const useRoute = () => ({
  params: {slice: 'combatModifier'},
});

export {useNavigation, useRoute};
