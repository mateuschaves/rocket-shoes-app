import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import Header from '~/components/Header';

export default function Main() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#141419" />
      <Header />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141419'
  }
});