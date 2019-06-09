import React, { Component } from 'react';
import {Text, View} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged , LoginUser } from '../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';


class LoginForm extends Component{

  onEmailChange = (text) => {
    this.props.emailChanged(text);
    
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  }

  onButtonPress = () => {
    const {email, password} = this.props;
    this.props.LoginUser({email, password})
  }

  renderError = () => {
    if(this.props.error) {
      return (
        <View style={{backgroundColor: '#FFF'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  renderButton = () => {
    if(this.props.loading) {
      return <Spinner/>
    }
    return <Button onPress={this.onButtonPress}>Login</Button>
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="email"
            placeholder="example@gmail.com"
            secure={false}
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="password"
            placeholder="password"
            secure={true}
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 20
  }
}

const mapStateToProps =({auth}) => {

  const {email, password, error, loading} = auth;

  return {email, password, error, loading}

}

export default connect(mapStateToProps, { emailChanged, passwordChanged, LoginUser })(LoginForm)