import React, { memo } from 'react';

import { View, Text } from 'react-native';

const B = () => {
  console.log(' Rendering component B');
  return (
    <View>
      <Text>Hello from component B</Text>
    </View>
  );
};

export default memo(B);
