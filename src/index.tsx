import { FirebaseAuthContext } from './FirebaseAuthContext';
import { FirebaseAuthProvider } from './FirebaseAuthProvider';

export const FirebaseAuth = {
  Context: FirebaseAuthContext,
  Provider: FirebaseAuthProvider,
  Consumer: FirebaseAuthContext.Consumer,
};

export * from './FirebaseAuthContext';
export * from './FirebaseAuthProvider';
export * from './useFirebaseAuth';

