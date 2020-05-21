export const mockNavigate = jest.fn();

const useNavigation = () => ({
  navigate: mockNavigate,
  goBack: jest.fn(),
});

const useRoute = () => ({
  params: {slice: 'combatModifier'},
});

export {useNavigation, useRoute};
