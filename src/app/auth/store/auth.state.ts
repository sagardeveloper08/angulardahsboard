import { User } from "src/models/_users";


export interface AuthState {
  user: User | null;
  isAdmin: boolean;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: any;
}

export const authInitialState: AuthState = {
  user: null,
  isAdmin: false,
  isLoggedIn: false,
  isLoading: true,
  error: null
};
