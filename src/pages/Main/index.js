import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';

import Header from '~/components/Header';
import Product from '~/components/Product';

export default function Main() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#141419" />
      <Header />

      <ScrollView alwaysBounceVertical horizontal>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141419'
  }
});