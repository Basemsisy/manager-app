import React, { Component } from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import {employeeUpdate, employeeSave} from '../actions';
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value})
    })
  }
  onButtonPress = () => {
    const {name, phone, shift} = this.props;
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
  }

  onTextPress = () => {
    const {name, phone, shift} = this.props;
    Communications.text(phone, ` hello ${name} your upcoming shift is on ${shift}`)
  }
  render () {
    return (
      <Card>

        <EmployeeForm/>
        <CardSection>
          <Button onPress={this.onButtonPress}>Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress}>Send Meesage</Button>
        </CardSection>

      </Card>
    )
  }
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm
  return {name, phone, shift}
}
export default connect(mapStateToProps,{ employeeUpdate, employeeSave })(EmployeeEdit)