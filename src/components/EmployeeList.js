import React, {Component} from 'react';
import _ from 'lodash';
import { ListView, View, Text } from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';
import {Spinner} from './common'


class EmployeeList extends Component {

  componentWillMount () {
     this.props.employeesFetch();

      this.createDataSource(this.props)
  }
  
  componentWillReceiveProps(nextProps) {
     this.createDataSource(nextProps)
  }

  createDataSource = ({ employees }) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees)
  }

  renderRow(employee) {
    return <ListItem employee={employee}/>;
  }

  renderContent = () => {
    if(this.props.loading) {
      return <Spinner/>
    } 
     return <ListView enableEmptySections dataSource={this.dataSource} renderRow={this.renderRow}/>
  }

  render() {
    return (
      <View style={{backgroundColor: '#FFF', flex: 1}}>
        {this.renderContent()}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees.employees_data, (val, uid) => {
    return {...val, uid}
  });
  const {loading} = state.employees
  return {employees, loading}
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)