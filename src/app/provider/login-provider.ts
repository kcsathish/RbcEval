import { Users } from "../Users";

export interface LoginProvider {
  initialize(): Promise<void>;
	getLoginStatus(loginStatusOptions?: any): Promise<Users>;
	signIn(signInOptions?: any): Promise<Users>;
	signOut(revoke?: boolean): Promise<any>;
}