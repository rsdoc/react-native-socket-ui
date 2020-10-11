import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { useStoreState } from 'easy-peasy';
import B from '../components/b';
import A from '../components/a';

const HomeScreen = () => {
  const { user } = useStoreState((store) => store.userModel);

  return (
    <View style={styles.container}>
      <Text>
        Welcome {user.firstName} {user.lastName}
      </Text>
      <A />
      <B />
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
