import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import * as React from 'react';
import { FirebaseAuthContext } from './FirebaseAuthContext';

export interface FirebaseAuthProviderConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  appId: string;
  storageBucket?: string;
  messagingSenderId?: string;
}

export interface FirebaseAuthProviderProps {
  config: FirebaseAuthProviderConfig;
}

export const FirebaseAuthProvider = ({
  config,
  children,
}: React.PropsWithChildren<FirebaseAuthProviderProps>) => {
  const configRef = React.useRef(config);
  const firebaseRef = React.useRef<FirebaseApp>();
  const [isAuthed, setIsAuthed] = React.useState(false);
  const [isIdle, setIsIdle] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(null);

  const subscribeToAuthChange = () => {
    if (!firebaseRef.current) return;
    const auth = getAuth(firebaseRef.current);
    return onAuthStateChanged(
      auth,
      user => {
        setIsAuthed(!!user);
        setIsIdle(false);
        setIsError(false);
        setUser(user);
      },
      () => {
        setIsAuthed(false);
        setIsIdle(false);
        setIsError(true);
        setUser(null);
      },
      () => {
        setIsIdle(false);
      }
    );
  };

  React.useEffect(() => {
    firebaseRef.current = initializeApp(configRef.current);
    const unsubscribe = subscribeToAuthChange();
    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  return (
    <FirebaseAuthContext.Provider
      value={{
        user,
        isIdle,
        isError,
        isAuthed,
        firebase: firebaseRef.current,
      }}
    >
      <>{children}</>
    </FirebaseAuthContext.Provider>
  );
};
