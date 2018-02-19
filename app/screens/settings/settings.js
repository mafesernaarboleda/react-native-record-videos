/**
 * @author Maria Fernanda Serna
 */

import React, { Component, PropTypes } from 'react';
import { FormLabel, FormInput } from 'react-native-elements';
import { View, Text, TouchableOpacity, Alert, Image, Animated, Keyboard, Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import simpleStore from 'react-native-simple-store';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import SpinnerComponent from './../../components/spinner';
import styles from './style';

const help = require('./../../images/icons-buzz/icon_help.png');
const imgBack = require('./../../images/icons-buzz/forward.png');
const background = require('./../../images/bg-new-account.png');
const buzzLogo = require('./../../images/buzz.png');

class Settings extends Component {

  profile= null;

  constructor(props) {
    moment().utcOffset('00:00');
    super(props);
    this.state = {
      name: '',
      alias: '',
      phoneNumber: '',
      password: '',
      email: '',
      dob: '',
      date: '',
      showHeader: true,
    };
    this.keyboardHeight = new Animated.Value(0);
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  componentDidMount() {
    const { getProfile } = this.props;
    getProfile();
  }

  async componentWillReceiveProps(nextProps) {
    const { getProfile } = this.props;
    if (nextProps.successGetProfile) {
      this.profile = await nextProps.profile;
      this.setState({ password: this.profile.password.substr(0, 7), email: this.profile.email, name: this.profile.name, alias: this.profile.alias, phoneNumber: this.profile.phoneNumber, date: this.profile.dob ? moment(this.profile.dob).utc().format('MM-DD-YYYY') : null });
    }
    if (nextProps.successUpdateProfile) {
      getProfile();
    }
    if (!nextProps.successUpdateProfile && nextProps.apiError !== '') {
      this.showAlert(nextProps.apiError);
    }
  }

  keyboardWillShow = () => {
    this.setState({ showHeader: false });
  };

  keyboardWillHide = () => {
    this.setState({ showHeader: true });
  };

  handleLogout() {
    const { logout } = this.props;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'SignIn'})]
    });
    this
      .props
      .navigation
      .dispatch(resetAction);
    simpleStore
          .delete('token');
    logout();
  }

  backPress() {
    const backAction = NavigationActions.back({ key: null });
    this.props.navigation.dispatch(backAction);
  }

  handleUpdated() {
    const { updateProfile } = this.props;
    const date = moment(this.state.date, "MM-D-YYYY");
    const user = {
      name: this.state.name,
      alias: this.state.alias,
      phoneNumber: this.state.phoneNumber,
      dob: {
        day: date.format('D'),
        month: date.format('M'),
        year: date.format('YYYY'),
      },
    };
    if (!user.phoneNumber.trim()) {
      this.showAlert('Invalid phone');
      return;
    }
    if (!user.alias.trim()) {
      this.showAlert('Invalid alias');
      return;
    }
    if (!user.name.trim()) {
      this.showAlert('Invalid name');
      return;
    }
    updateProfile(user);
  }

  showAlert(message) {
    Alert.alert('Error', message, [
      {
        text: 'Dismiss',
        onPress: () => true,
      }
    ]);
  }

  linkTermsPage() {
    this.props.navigation.navigate('TermsPage');
  }

  linkPrivacyPage() {
    this.props.navigation.navigate('PrivacyPage');
  }

  render() {
    const { loading } = this.props;
    return (
      <View style={styles.container}>
        <Image source={background} style={[styles.container]} resizeMode="cover">
          <View style={styles.header}>
            <View style={{ marginLeft: 10, alignItems: 'center' }}>
              <Image source={help} resizeMode="contain" style={{ marginLeft: 10, width: 27, height: 27 }} />
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image style={styles.logo} source={buzzLogo} resizeMode="contain" />
            </View>
            <View style={{ marginRight: 10 }}>
              <TouchableOpacity onPress={() => this.backPress()}>
                <Image source={imgBack} resizeMode="contain" style={{ marginLeft: 10, width: 20, height: 20 }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.topHeight}>
            { this.state.showHeader && (
              <View style={styles.title}><Text style={{ fontSize: 70, fontWeight: 'bold' }}>Settings</Text></View>
            )}
            <KeyboardAwareScrollView>
              <View style={styles.containerInputs}>
                <View>
                  <FormLabel labelStyle={styles.text}>
                      FULL NAME
                  </FormLabel>
                  <FormInput
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}
                    inputStyle={styles.inputStyle}
                    containerStyle={styles.formContainer}
                    textInputRef="name"
                    onSubmitEditing={() => {this.refs.formRegisterEmail.refs.email.focus(); }}
                  />
                </View>
                <View>
                  <FormLabel labelStyle={styles.text}>
                      EMAIL
                  </FormLabel>
                  <FormInput
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    inputStyle={styles.inputStyle}
                    containerStyle={styles.formContainer}
                    textInputRef="email"
                    ref="formRegisterEmail"
                    onSubmitEditing={() => {this.refs.formRegisterPassword.refs.password.focus(); }}
                  />
                </View>
                <View>
                  <FormLabel labelStyle={styles.text}>
                      PASSWORD
                  </FormLabel>
                  <FormInput
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    inputStyle={styles.inputStyle}
                    containerStyle={styles.formContainer}
                    textInputRef="password"
                    secureTextEntry
                    maxLength={8}
                    ref="formRegisterPassword"
                    onSubmitEditing={() => {this.refs.formRegisterAlias.refs.alias.focus(); }}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <FormLabel labelStyle={styles.text}>
                      ALIAS
                  </FormLabel>
                  <FormInput
                    onChangeText={alias => this.setState({ alias })}
                    value={this.state.alias}
                    inputStyle={styles.inputStyle}
                    containerStyle={styles.formContainer}
                    ref="formRegisterAlias"
                    textInputRef="alias"
                    onSubmitEditing={() => { this.refs.formRegisterPhone.refs.phone.focus(); }}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <FormLabel labelStyle={styles.text}>
                      PHONE NUMBER
                  </FormLabel>
                  <FormInput
                    onChangeText={phoneNumber => this.setState({ phoneNumber })}
                    value={this.state.phoneNumber}
                    inputStyle={styles.inputStyle}
                    containerStyle={styles.formContainer}
                    ref="formRegisterPhone"
                    keyboardType="numeric"
                    textInputRef="phone"
                  />
                </View>
                <View style={styles.inputContainer}>
                  <FormLabel labelStyle={styles.text}>
                      DATE OF BIRTH
                  </FormLabel>
                  <DatePicker
                    style={[styles.inputStyle, { marginTop: 15, marginHorizontal: 20, width: 260 }]}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="M-D-YYYY"
                    minDate="1-1-1500"
                    confirmBtnText="Confirm"
                    showIcon={false}
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateInput: {
                        borderColor: '#fff',
                        borderBottomColor: '#CDCDCD',
                        borderBottomWidth: 1,
                        marginRight: Platform.OS === 'ios' ? 0 : 50,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                      },
                    }}
                    onDateChange={date => this.setState({ date })}
                  />
                </View>
              </View>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => this.handleUpdated()}
                  style={styles.buttonNewAccount}
                >
                  <Text style={{ fontWeight: 'bold' }}>Save Settings</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.bottom]}>
                <View style={{ flex: 1, marginLeft: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={() => this.linkTermsPage()}>
                    <Text style={styles.textBottom}>TERMS OF USE</Text>
                  </TouchableOpacity><Text>  </Text>
                  <TouchableOpacity onPress={() => this.linkPrivacyPage()} >
                    <Text style={styles.textBottom}>PRIVACY POLICY</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 15 }}>
                  <TouchableOpacity onPress={() => this.handleLogout()}>
                    <Text style={styles.textBottom}>LOG OUT</Text>
                  </TouchableOpacity>
                </View>
              </View>
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

Settings.propTypes = {
  loading: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  apiError: PropTypes.string.isRequired,
};

export default Settings;
