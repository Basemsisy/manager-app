import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'center',
    paddingTop: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    elevation: 5
  },
  text: {
    fontSize: 22,
  }
})

export { Header };