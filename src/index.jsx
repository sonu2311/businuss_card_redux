import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client';
import MainFunc from './common';
import MainFunc2 from './cards';

import { configureStore } from '@reduxjs/toolkit';
import {book_slice} from './book_slice';
import {cards_slice} from './cards_slice';


export const store = configureStore({
  reducer: {
    book_slice: book_slice.reducer,
    cards_slice: cards_slice.reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainFunc2 />
      {/*<MainFunc />*/}
    </Provider>
  </React.StrictMode>
);
