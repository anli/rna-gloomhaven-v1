export const mockNavigate = jest.fn();

const useNavigation = () => ({
  navigate: mockNavigate,
  goBack: jest.fn(),
});

export {useNavigation};
