import React from'react';
import {View, Text, Modal} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';

const Confirm = ({ children, visibility, onAccept, onDecline }) => {
  const {containerStyle, cardSectionStyle, textStyle} = styles
  return (
    <Modal
      visible={visibility}
      transparent={true}
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
         <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>
        
        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection> 
      </View>
    </Modal>
  )
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .75)',
    justifyContent: 'center', 
    position: 'relative'
  },
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },

}
export {Confirm}