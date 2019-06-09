import React from 'react';
import {View, TextInput, Text} from 'react-native';

const Input = ({label, placeholder, secure, value, onChangeText}) => {

  const { containerStyle, labelStyle, inputStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        secureTextEntry={secure}
        style={inputStyle}
      />
    </View>
  )
}

const styles = {
  containerStyle: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  },
  inputStyle: {
    color: '#000',
    paddingHorizontal: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  }
}

export { Input }