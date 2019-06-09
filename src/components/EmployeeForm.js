import React, { Component } from 'react';
import {View,Picker, Text} from 'react-native';
import { connect } from 'react-redux';
import {employeeUpdate} from '../actions';
import {Input, CardSection} from './common';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="name"
            placeholder="employee name"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
          />
        </CardSection>

        <CardSection>
          <Input
            label="phone"
            placeholder="010-00-00-00-00"  
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
          />
        </CardSection>

        <CardSection>
          <Text style={{marginLeft: 25, fontSize: 18, flex: 1}}>shift</Text>
          <Picker
            style={{flex: 2}}
            selectedValue={this.props.shift} 
            onValueChange={ value => this.props.employeeUpdate({prop: 'shift', value}) }
          >
            <Picker.Item label="Monday" value="Monday"/>
            <Picker.Item label="Tuesday" value="Tuesday"/>
            <Picker.Item label="Wednesday" value="Wednesday"/>
            <Picker.Item label="Thursday" value="Thursday"/>
            <Picker.Item label="Friday" value="Friday"/>
            <Picker.Item label="Saturday" value="Saturday"/>
            <Picker.Item label="Sunday" value="Sunday"/>
          </Picker>
        </CardSection>

      </View>
    )
  }
}


const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift}
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm)
