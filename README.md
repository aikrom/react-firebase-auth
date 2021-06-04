# React Firebase Auth Package

A simple package that will help create a context with authorization through `firabase/auth` without writing a lot of boilerplate code.

## Install Package

***NOTE***: Package use **Firebase Web SDK 9 Beta (2) Modular Version** as peer dependencies. This is a good option to facilitate tree-shaking (removal of unused code) and to make your web app as small and fast as possible.

```bash
npm i --save @rerset/react-firebase-auth
```

## Usage example

Add `FirebaseAuth.Provider` somewhere in root component (for example `App`):

```jsx
const App = () => {
  return (
    <FirebaseAuth.Provider config={{ /* Firebase config */ }}>
      {/* ... */}
    </FirebaseAuth.Provider>
  )
}
```

Then use `FirebaseAuth.Consumer` anywhere to react user auth status change:

```jsx
const SomePage = () => {
  return (
    <FirebaseAuth.Consumer>
      {({ isAuthed }) => (
        isAuthed ? (
          <div>Logged In</div>
        ) : (
          <button>Log In</button>
        )
      )}
    </FirebaseAuth.Consumer>
  )
}
```

Or use `useFirebaseAuth` hook to get context values:

```jsx
const SomePage = () => {
  const { isAuthed } = useFirebaseAuth()

  return (
    <div>
      {({ isAuthed }) => (
        isAuthed ? (
          <div>Logged In</div>
        ) : (
          <button>Log In</button>
        )
      )}
    </div>
  )
}
```

You can completely control the authorization process using different firebase auth providers. To do this, you need to take an instance of the application and use any of the authorization methods described in the [documentation](https://firebase.google.com/docs/auth/web/start).

Get firebase app instance from `firebase/app`:

```jsx
import { getApp } from 'firebase/app'

const SomePage = () => {
  
  const handleAuth = () => {
    const app = getApp()
    // do something
  }

  return (
    <div>
      {({ isAuthed }) => (
        isAuthed ? (
          <div>Logged In</div>
        ) : (
          <button onClick={handleAuth}>Log In</button>
        )
      )}
    </div>
  )
}
```

Or get firebase app instance from context values:

```jsx
import { getApp } from 'firebase/app'

const SomePage = () => {
  const { firebase } = useFirebaseAuth()
  
  const handleAuth = () => {
    // do something
  }

  ....
}
```

## For developers

This package build with awesome library [TSDX](https://tsdx.io/), so you read docs and start to contribute or create own fork.

The recommended workflow is to run TSDX in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To run tests, use `npm test` or `yarn test`.


## Learn more

- [React](https://reactjs.org/)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [TSDX](https://tsdx.io/)

## License

This project is [MIT licensed](LICENSE).