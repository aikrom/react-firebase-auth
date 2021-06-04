import * as React from 'react';
import { FirebaseAuthContext } from './FirebaseAuthContext';

export const useFirebaseAuth = () => {
  const values = React.useContext(FirebaseAuthContext);
  return values;
};
