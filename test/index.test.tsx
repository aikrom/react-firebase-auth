import { deleteApp, getApp } from 'firebase/app';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FirebaseAuth } from '../src';

const config = {
  projectId: '123',
  authDomain: '123',
  apiKey: '123',
  appId: '123',
};

afterEach(async () => {
  const app = getApp();
  await deleteApp(app);
});

describe('Render without crashing', () => {
  it('renders FirebaseAuth.Provider without crashing', () => {
    
    const div = document.createElement('div');
    ReactDOM.render(<FirebaseAuth.Provider config={config} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders FirebaseAuth.Consumer without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <FirebaseAuth.Provider config={config}>
        <FirebaseAuth.Consumer>{() => '123'}</FirebaseAuth.Consumer>
      </FirebaseAuth.Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
