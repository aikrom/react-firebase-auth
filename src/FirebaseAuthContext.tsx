import { FirebaseApp } from 'firebase/app';
import { User } from 'firebase/auth';
import * as React from 'react';

export type FirebaseAuthContext = {
  isAuthed: boolean;
  isError: boolean;
  isIdle: boolean;
  user: User | null;
  firebase?: FirebaseApp;
};

export const FirebaseAuthContext = React.createContext<FirebaseAuthContext>({
  isAuthed: false,
  isError: false,
  isIdle: false,
  user: null,
});
