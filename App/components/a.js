import React, { useState, useEffect, memo } from 'react';

import { View, Text, Button } from 'react-native';
// import { emitHello } from '../socket-events/socket';

const A = () => {
  console.log(' Rendering component A');
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     //   const gt = gameTimer.subscribe(({ data }) => {
  //     //     setCount(count + 1);
  //     //   });
  //     //   return () => gt.unsubscribe();
  //     emitHello();
  //   }, []);

  return (
    <View>
      <Text>Hello from component A and count {count} </Text>
      <Button title='count' onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default memo(A);
