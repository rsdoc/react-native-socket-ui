import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useStoreState } from 'easy-peasy';

const HomeScreen = () => {
  const { user } = useStoreState((store) => store.userModel);
  return (
    <View style={styles.container}>
      <Text>
        Welcome to home screen {user.firstName} {user.lastName}
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
