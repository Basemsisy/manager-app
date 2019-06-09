import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {CardSection} from './common';

export default class ListItem extends Component {

  onRowPress = () => {
    Actions.employeeEdit({ employee: this.props.employee })
  }

  render() {
    console.log(this.props);
    const {name} = this.props.employee
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
