import React from 'react';
import { createRoot } from 'react-dom/client';
import '../app/assets/stylesheets/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CurrentUserProvider } from './contexts/CurrentUserContext';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </React.StrictMode>
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
});