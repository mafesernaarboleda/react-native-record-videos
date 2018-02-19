/**
 * @author Maria Fernanda Serna
 */

import React, { Component, PropTypes } from 'react';
import { FormLabel, FormInput } from 'react-native-elements';
import { View, Text, TouchableOpacity, Alert, Image, StatusBar, Animated, Keyboard, Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import styles from './style';
import SpinnerComponent from './../../components/spinner';

const imgBack = require('./../../images/icons-buzz/back-icon.png');
const background = require('./../../images/bg-new-account.png');
const help = require('./../../images/icons-buzz/icon_help.png');

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      alias: '',
      showHeader: true,
    };
    this.keyboardHeight = new Animated.Value(0);
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.successRegister === true) {
      this
        .props
        .navigation
        .navigate('Home');
    }
    if (nextProps.successRegister === false && nextProps.apiError !== '') {
      this.showAlert(nextProps.apiError);
    }
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = () => {
    this.setState({ showHeader: false });
  };

  keyboardWillHide = () => {
    this.setState({ showHeader: true });
  };

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  registerUser = () => {
    const { register } = this.props;
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordConfirmation: this.state.password,
      alias: this.state.alias,
    };
    if (!this.validateEmail(user.email)) {
      this.showAlert('Invalid email');
      return;
    }
    if (!user.alias.trim()) {
      this.showAlert('Invalid alias');
      return;
    }
    if (!user.password.trim()) {
      this.showAlert('Invalid password');
      return;
    }
    if (!user.name.trim()) {
      this.showAlert('Invalid name');
      return;
    }
    if (user.password !== user.passwordConfirmation) {
      this.showAlert('Password confirmation needs to match.');
      return;
    }
    register(user);
  }

  showAlert(message) {
    Alert.alert('Error', message, [
      {
        text: 'Dismiss',
        onPress: () => true,
      }
    ]);
  }

  _scrollToInput (reactNode: any) {
    this.refs.scroll.scrollToFocusedInput(reactNode)
  }

  linkTermsPage() {
    this.props.navigation.navigate('TermsPage');
  }

  linkPrivacyPage() {
    this.props.navigation.navigate('PrivacyPage');
  }

  backPress() {
    const backAction = NavigationActions.back({ key: null });
    this
      .props
      .navigation
      .dispatch(backAction);
  }

  render() {
    const { loading } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar animated hidden />
        <Image source={background} style={styles.container} resizeMode="cover">
          <View style={styles.topHeight}>
            <View style={styles.header}>
              <View style={{ marginLeft: 10 }}>
                <TouchableOpacity onPress={() => this.backPress()}>
                  <Image source={imgBack} resizeMode="contain" style={{ width: 15, height: 15 }} />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{ fontWeight: 'bold', color: '#fff' }}>New Account</Text>
              </View>
              <View style={{ marginRight: 10, alignItems: 'center' }}>
                <Image source={help} resizeMode="contain" style={{ marginRight: 10, width: 27, height: 27 }} />
              </View>
            </View>
            { this.state.showHeader && (
              <View style={styles.title}><Text style={{ fontSize: 70, fontWeight: 'bold' }}>Sign Up</Text></View>
            )}
            <KeyboardAwareScrollView style={{ flex: 1 }}>
              <View style={styles.containerInputs}>
                <View>
                  <FormLabel labelStyle={styles.text}>
                    FULL NAME
                  </FormLabel>
                  <FormInput
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                    inputStyle={styles.inputStyle}
                    containerStyle={styles.formContainer}
                    textInputRef="name"
                    onSubmitEditing={() => { this.refs.formRegisterName.refs.emailtext.focus(); }}
                  />
                </View>
                <View>
                  <FormLabel labelStyle={styles.text}>
                      EMAIL
                  </FormLabel>
                  <FormInput
                    keyboardType="email-address"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                    inputStyle={styles.inputStyle}
                    containerStyle={styles.formContainer}
                    ref="formRegisterName"
                    textInputRef="emailtext"
                    onSubmitEditing={() => { this.refs.formRegisterPass.refs.password.focus(); }}
                  />
                </View>
                <View>
                  <FormLabel labelStyle={styles.text}>
                      PASSWORD
                  </FormLabel>
                  <FormInput
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    secureTextEntry
                    inputStyle={styles.inputStyle}
                    containerStyle={styles.formContainer}
                    ref="formRegisterPass"
                    textInputRef="password"
                    onSubmitEditing={() => { this.refs.formRegister.refs.alias.focus(); }}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <FormLabel labelStyle={styles.text}>
                      ALIAS
                  </FormLabel>
                  <FormInput
                    onChangeText={(alias) => this.setState({ alias })}
                    value={this.state.alias}
                    inputStyle={styles.inputStyle}
                    containerStyle={styles.formContainer}
                    ref="formRegister"
                    textInputRef="alias"
                  />
                </View>
              </View>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => this.registerUser()}
                  style={styles.buttonNewAccount}
                >
                  <Text style={{ fontWeight: 'bold' }}>Create Account</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.bottom]}>
              <View style={{ flex: 1, marginLeft: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={styles.textBottom}> BY CREATING YOUR  ACCOUNT YOU ACKNOWLEDGE AND AGREE TO OUR
                    <Text style={{ textDecorationLine: 'underline' }} onPress={() => this.linkTermsPage()}> TERMS OF USE </Text>
                    AND
                    <Text style={{ textDecorationLine: 'underline' }} onPress={() => this.linkPrivacyPage()}> PRIVACY POLICY</Text>
                    </Text>
                  </View>
                </View>
              </View>
              <View />
              {Platform.OS === 'android' &&
                <KeyboardSpacer />
              }
            </KeyboardAwareScrollView>
          </View>
        </Image>
              { loading === true
                ? <SpinnerComponent loading={loading} color={'#000'} />
                : null
              }
      </View>
    );
  }
}

Register.propTypes = {
  loading: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  apiError: PropTypes.string.isRequired,
};

export default Register;
