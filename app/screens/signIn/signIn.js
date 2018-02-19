/**
 * @author Maria Fernanda Serna
 */

import React, { PropTypes, Component } from 'react';
import { FormLabel, FormInput } from 'react-native-elements';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  StatusBar,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import simpleStore from 'react-native-simple-store';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import SpinnerComponent from './../../components/spinner';
import styles from './style';

const buzzLogo = require('./../../images/buzz.png');
const background = require('./../../images/background.png');
const help = require('./../../images/icons-buzz/icon_help.png');

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      smallLogo: false,
    };
    this.keyboardHeight = new Animated.Value(0);
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentDidMount() {
    const value = await AsyncStorage.getItem('token');
    if (value !== null){
      this.props.navigation
      .dispatch(NavigationActions.reset(
        {
           index: 0,
           actions: [
            NavigationActions.navigate({ routeName: 'Home' })
           ],
         }));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.successLogin) {
      this.props.navigation
      .dispatch(NavigationActions.reset(
        {
           index: 0,
           actions: [
            NavigationActions.navigate({ routeName: 'Home' })
           ],
         }));
    }
    if (!nextProps.successLogin && nextProps.apiError !== '') {
      this.showAlert(nextProps.apiError);
    }
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    this.setState({ smallLogo: true });
  };

  keyboardWillHide = (event) => {
    this.setState({ smallLogo: false });
  };

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleLogin() {
    const { login } = this.props;
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    if (!user.email.trim() && !user.password.trim()) {
      this.showAlert('Invalid email and password');
      return;
    }
    if (!user.email.trim()) {
      this.showAlert('Invalid email');
      return;
    }
    if (!user.password.trim()) {
      this.showAlert('Invalid password');
      return;
    }
    login(user, this.state.rememberMe);
  }

  handleNewAccount() {
    this
      .props
      .navigation
      .navigate('Register');
  }

  showAlert(message) {
    Alert.alert('Error', message, [
      {
        text: 'Dismiss',
        onPress: () => true,
      }
    ]);
  }

  render() {
    const { loading } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar animated hidden />
        <Image source={background} style={[styles.container]} resizeMode="stretch">
          <KeyboardAvoidingView style={{ flex: 1 }}>
            <View style={[styles.header]}>
              <View style={{ flex: 1, marginRight: 10, alignItems: 'flex-end' }}>
                <Image source={help} resizeMode="contain" style={{ marginRight: 10, width: 27, height: 27 }} />
              </View>
            </View>
            <View style={[styles.topHeight]}>
              <View style={styles.logo}>
                {
                  this.state.smallLogo ? (<Image resizeMode="contain"  source={buzzLogo} style={{ height: 70, width: 100 }} />)
                  : (<Image resizeMode="contain"  source={buzzLogo} style={{ height: 230, width: 260 }} />)
                }
              </View>
              <View style={styles.containerInputs}>
                <View>
                  <FormLabel labelStyle={styles.text}>
                    ALIAS OR EMAIL
                  </FormLabel>
                  <FormInput
                    onChangeText={(email) => this.setState({ email })}
                    keyboardType="email-address"
                    value={this.state.email}
                    inputStyle={styles.inputStyle}
                  />
                </View>
                <View>
                  <FormLabel labelStyle={styles.text}>
                    PASSWORD
                  </FormLabel>
                  <FormInput
                    onChangeText={(password) => this.setState({ password })}
                    secureTextEntry
                    value={this.state.password}
                    inputStyle={styles.inputStyle}
                  />
                </View>
              </View>
              <View style={styles.button}>
                <TouchableOpacity onPress={() => this.handleLogin()} style={styles.buttonLets}>
                  <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 30 }}>Lets Go</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => this.handleNewAccount()}
                  style={styles.buttonNewAccount}
                >
                  <Text style={{ fontSize: 18 }}>Not registered?
                    <Text style={{ fontWeight: 'bold' }}> Create Account</Text>
                  </Text>
                </TouchableOpacity>
              </View>
              <KeyboardSpacer />
            </View>
          </KeyboardAvoidingView>
        </Image>
        {loading === true
          ? <SpinnerComponent loading={loading} color={"#000"}/>
          : null}
      </View>
    );
  }
}

SignIn.propTypes = {
  loading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  apiError: PropTypes.string.isRequired,
};

export default SignIn;
