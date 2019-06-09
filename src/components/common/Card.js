import React from 'react';

import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={Styles.container}>
      {props.children}
    </View>
  )
}

const Styles = {
  container: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#DDD',
    borderRadius: 2,
    marginHorizontal: 5,
    marginTop: 10,
    elevation: 3, //shadow for android devices
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    backgroundColor: '#FFF'
  }
}

export { Card }