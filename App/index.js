import React from 'react';

import { StoreProvider } from 'easy-peasy';

import store from './store';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <StoreProvider store={store}>
      <HomeScreen />
    </StoreProvider>
  );
}
