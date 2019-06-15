import React, { Component } from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import {Card, CardSection, Button, Confirm} from './common';
import EmployeeForm from './EmployeeForm';


class EmployeeEdit extends Component {
  state = {
    showModal: false
  }

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

  onAccept = () => {
    const {uid} = this.props.employee;
    this.props.employeeDelete({uid})
  }

  onDecline = () => {
    this.setState({showModal: false})
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

        <CardSection>
          <Button onPress={() => this.setState({showModal: !this.state.showModal})}> Delete</Button>
        </CardSection>

        <Confirm 
          visibility={this.state.showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
          >
          Are you sure for delete this?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm
  return {name, phone, shift}
}
export default connect(mapStateToProps,{ employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit)