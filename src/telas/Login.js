import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

class Login extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login</Text>
        <Button mode="text" onPress={() => this.props.navigation.navigate('ExemploA')}>
          OK
        </Button>
      </View>
    );
  }
}

export default Login;
