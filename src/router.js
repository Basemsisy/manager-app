import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit'


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>

        <scene key="auth">
          <Scene key="login" component={LoginForm} title="please login"/>
        </scene>

        <Scene key="main">
          <Scene 
            key="employeeList" 
            component={EmployeeList}
            title="employees"
            rightTitle="Add" 
            onRight={()=> Actions.employeeCreate()}
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="create employee"/>
          <Scene key="employeeEdit" component={EmployeeEdit} title="edit employee"/>
        </Scene>

      </Scene>
    </Router>
  );
}

export default RouterComponent