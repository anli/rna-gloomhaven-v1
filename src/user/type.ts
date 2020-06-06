export interface State {
  isDarkMode?: boolean;
  userId?: string;
}

export interface RootState {
  user: State;
}
