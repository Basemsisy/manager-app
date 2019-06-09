import React from 'react';

import {TouchableOpacity, Text} from 'react-native';


const Button = ({onPress, children, color}) => {
  return (
    <TouchableOpacity 
      style={{
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: color || '#007aff',
        flex: 1,
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5
      }} 
      onPress={onPress} >
      <Text style={{
        alignSelf: 'center',
        fontWeight: '600',
        color: color || '#007aff',
        fontSize: 16
      }}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}


export { Button }