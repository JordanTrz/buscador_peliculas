import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MovieContextProvider } from './context/movieContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </React.StrictMode>,
);
