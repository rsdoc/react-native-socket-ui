import React, { useEffect, useState } from 'react';

import { StoreProvider } from 'easy-peasy';

// import { socket } from './socket-events/socket';

import store from './store';
import HomeScreen from './screens/HomeScreen';

import { View, Text, Button } from 'react-native';
import { gameTimer, emitHello } from './socket-events/socket';

export default function App() {
  console.log(' APP - Rendering');
  const [count, setCount] = useState(0);

  useEffect(() => {
    let sub = gameTimer.subscribe(({ elapsedTime }) => setCount(elapsedTime));
    return () => sub.unsubscribe();
  }, [count]);

  return (
    <StoreProvider store={store}>
      {/* <HomeScreen /> */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 32 }}>{count} </Text>
        <Button title='count' onPress={() => emitHello()} />
      </View>
    </StoreProvider>
  );
}
