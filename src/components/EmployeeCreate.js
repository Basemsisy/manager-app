import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import {employeeUpdate, employeeCreate} from '../actions';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component {

  onButtonPress = () => {
    const {name, phone, shift} = this.props;
    this.props.employeeCreate({name, phone, shift})
  }

  render() {
    console.log(this.props);
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift}
}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate)