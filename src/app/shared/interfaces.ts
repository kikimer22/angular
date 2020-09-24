export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface Faq {
  id?: string;
  title: string;
  text: string;
}

export interface FbCreateResponse {
  name: string;
}
