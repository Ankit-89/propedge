import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  DeviceEventEmitter,
  Platform,
  Alert,
  ScrollView,
  Keyboard,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Modal from 'react-native-modalbox';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import * as Images from '../../assets/Images/map';
import CountryPicker from 'react-native-country-picker-modal';
import {Black} from '../../utils/common';
import {add} from 'react-native-reanimated';
export const {width, height} = Dimensions.get('screen');
const window = Dimensions.get('window');

const IMAGE_HEIGHT = window.width / 2;
const IMAGE_HEIGHT_SMALL = window.width / 7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: width,
  },
  imageIcon: {
    resizeMode: 'contain',
    width: width * 0.6,
  },
  imageContainer: {
    height: height * 0.3,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
    width: width * 0.9,
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: '700',
    alignSelf: 'flex-start',
    marginBottom: 30,
    color: '#1D2B41',
  },
  buttonStyle: {
    borderRadius: 100,
    width: width * 0.8,
    backgroundColor: '#0F0059',
    borderWidth: 1,
    borderColor: '#0F0059',
    height: height * 0.07,
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyleDisabled: {
    borderRadius: 100,
    width: width * 0.8,
    backgroundColor: '#7366B0',
    borderWidth: 1,
    borderColor: '#7366B0',
    height: height * 0.07,
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
  },
  loginText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 18,
  },
  otpContainer: {
    height: height * 0.07,
    display: 'flex',
    marginTop: 10,
    flexDirection: 'row',
  },
  separator: {
    height: height * 0.07,
    marginTop: 10,
  },
  input: {
    padding: 2,
    borderWidth: 1,
    borderTopColor: 'gray',
    borderLeftColor: 'gray',
    borderBottomColor: 'gray',
    borderRightColor: 'gray',
    borderRadius: 10,
    fontSize: 24,
    margin: 2,
    width: width * 0.13,
    textAlign: 'center',
  },
  input2: {
    width: '100%',
    letterSpacing: 40,
    fontSize: 24,
    padding: 0,
    margin: 0,
  },
  square1: {
    borderWidth: 1,
    height: 50,
    position: 'absolute',
    width: width * 0.11,
    borderTopColor: 'gray',
    borderLeftColor: 'gray',
    borderBottomColor: 'gray',
    borderRightColor: 'gray',
    borderRadius: 10,
    marginLeft: 3,
  },
  square2: {
    borderWidth: 1,
    height: 50,
    position: 'absolute',
    width: width * 0.11,
    borderTopColor: 'gray',
    borderLeftColor: 'gray',
    borderBottomColor: 'gray',
    borderRightColor: 'gray',
    borderRadius: 10,
    marginLeft: 55,
  },
  square3: {
    borderWidth: 1,
    height: 50,
    position: 'absolute',
    width: width * 0.11,
    borderTopColor: 'gray',
    borderLeftColor: 'gray',
    borderBottomColor: 'gray',
    borderRightColor: 'gray',
    borderRadius: 10,
    marginLeft: 110,
  },
  square4: {
    borderWidth: 1,
    height: 50,
    position: 'absolute',
    width: width * 0.11,
    borderTopColor: 'gray',
    borderLeftColor: 'gray',
    borderBottomColor: 'gray',
    borderRightColor: 'gray',
    borderRadius: 10,
    marginLeft: 163,
  },
  square5: {
    borderWidth: 1,
    height: 50,
    position: 'absolute',
    width: width * 0.11,
    borderTopColor: 'gray',
    borderLeftColor: 'gray',
    borderBottomColor: 'gray',
    borderRightColor: 'gray',
    borderRadius: 10,
    marginLeft: 216,
  },
  square6: {
    borderWidth: 1,
    height: 50,
    position: 'absolute',
    width: width * 0.11,
    borderTopColor: 'gray',
    borderLeftColor: 'gray',
    borderBottomColor: 'gray',
    borderRightColor: 'gray',
    borderRadius: 10,
    marginLeft: 269,
  },
  inputContainer: {
    width: '90%',
    height: 50,
    marginTop: 10,
  },
  inputEnd: {
    padding: 2,
    borderWidth: 1,
    borderTopColor: 'gray',
    borderLeftColor: 'gray',
    borderBottomColor: 'gray',
    borderRightColor: 'gray',
    borderRadius: 10,
    fontSize: 24,
    margin: 2,
    marginRight: 8,
    width: width * 0.13,
    textAlign: 'center',
  },
  resendView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  txtResend: {
    color: '#1D2B41',
    fontSize: 16,
    fontWeight: '200',
  },
  txtResendInner: {
    fontWeight: '600',
    color: '#0F0059',
    marginTop: 2,
  },
  countryBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    flexBasis: '20%',
  },
  mobileInput: {
    height: 50,
    borderBottomWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    // width: '100%',
    color: Black,
    marginLeft: 10,
    flexBasis: '70%',
    flex: 1,
  },
  enterMobileField: {
    flexDirection: 'row',
    flexBasis: '100%',
  },
  mobileText: {
    fontWeight: '200',
    color: 'gray',
  },
  headerStyle: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 13,
  },
  headerIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  helpIconStyle: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 13,
    marginLeft: 8,
  },
  helpIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  hasPadding: {
    paddingBottom: Platform.OS === 'ios' ? height * 0.25 : height * 0.05,
  },
  noPadding: {
    paddingBottom: 0,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 300,
    borderRadius: 10,
  },
  modalText: {
    color: '#1D2B41',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalCancel: {
    margin: 10,
    borderRadius: 100,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 4,
    paddingBottom: 4,
    borderWidth: 1,
  },
  modalButtonTextCancel: {
    color: '#1D2B41',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
  },
  modalButtons: {
    display: 'flex',
    flexDirection: 'row',
    width: width * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Login(props, navigation) {
  const [countryCode, setCountryCode] = useState('AU');
  const [callingCode, setCallingCode] = useState(['61']);
  const [maximumLength, setMaximumLength] = useState(10);
  const [visible, setVisible] = useState(false);
  const [inputValues, setInputValues] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [state, setState] = useState({
    isSent: false,
    mobile: null,
    sessionId: null,
  });
  const [loginText, setLoginText] = useState('Get Code');
  const [holder1, setHolder1] = useState('');
  const [holder2, setHolder2] = useState('');
  const [holder3, setHolder3] = useState('');
  const [holder4, setHolder4] = useState('');
  const [holder5, setHolder5] = useState('');
  const [holder6, setHolder6] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [tempMobile, setTempMobile] = useState('');
  const [isDisableOtp, setDisableOtp] = useState(true);
  const holderText1 = useRef(null);
  const holderText2 = useRef(null);
  const holderText3 = useRef(null);
  const holderText4 = useRef(null);
  const holderText5 = useRef(null);
  const holderText6 = useRef(null);
  const {userType} = props.route.params;
  const scrolltoview = useRef(null);
  const submitModal = useRef(null);
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSelect = country => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode);
    setMobileError('');
    setInputValues(false);
    //validateNumber();
  };

  const onlyNumeric = text => {
    setTempMobile(text.replace(/[^0-9]/g, ''));
    setInputValues(true);
    if (callingCode[0] === '61' || callingCode[0] === 61) {
      setMaximumLength(9);
    } else {
      setMaximumLength(10);
    }
    return text.replace(/[^0-9]/g, '');
  };
  const validateNumeric = val => {
    var reg = new RegExp('^[0-9]*$');
    return reg.test(val);
  };

  // const validateNumber = () => {
  //   if (!state.isSent && tempMobile !== '') {
  //     if (callingCode[0] === '61' || callingCode[0] === 61) {
  //       var phoneExpression = /^[-+\/\s]*([0-9][-+\/\s]*){9,}$/;
  //       if (!tempMobile.match(phoneExpression)) {
  //         setMobileError('Please enter correct mobile number Kapoor');
  //         setDisableOtp(true);
  //       } else {
  //         setMobileError('');
  //         setDisableOtp(false);
  //       }
  //     } else {
  //       var patt = new RegExp(/^\d{10}$/);
  //       if (!patt.test(tempMobile)) {
  //         setMobileError('Please enter correct mobile number Ankit');
  //         setDisableOtp(true);
  //       } else {
  //         setMobileError('');
  //         setDisableOtp(false);
  //       }
  //     }
  //   }
  // };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    if (state.isSent) {
      setLoginText('Login');
      setDisableOtp(true);
    }
    if (
      holder1.trim().length > 0 &&
      holder2.trim().length > 0 &&
      holder3.trim().length > 0 &&
      holder4.trim().length > 0 &&
      holder5.trim().length > 0 &&
      holder6.trim().length > 0
    ) {
      setDisableOtp(false);
    }
    //validateNumber();
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [
    state.isSent,
    holder1,
    holder2,
    holder3,
    holder4,
    holder5,
    holder6,
    tempMobile,
  ]);

  const validateOtp = () => {
    if (state.isSent) {
      if (
        holder1.trim().length > 0 &&
        holder2.trim().length > 0 &&
        holder3.trim().length > 0 &&
        holder4.trim().length > 0 &&
        holder5.trim().length > 0 &&
        holder6.trim().length > 0
      ) {
        const data = {
          session_id: state.sessionId,
          otp: `${holder1}${holder2}${holder3}${holder4}${holder5}${holder6}`,
        };
        dispatch.Auth.verifyOtp(data).then(res => {
          if (res) {
            if (res.status > 200) {
              setMobileError('Please enter correct Code');
            } else {
              dispatch.Auth.setUserData(res);
              props.navigation.navigate('TabBar');
            }
          } else {
            setMobileError('Please enter correct Code');
          }
        });
      } else {
        setMobileError('Please enter correct Code');
      }
    }
  };
  const sendOTP = mobile => {
    const data = {mobile_number: mobile, user_type: userType};
    dispatch.Auth.loginUser(data).then(res => {
      if (res.data) {
        if (res.data['session_id']) {
          setState({
            isSent: true,
            mobile: mobile,
            sessionId: res.data['session_id'],
          });
          setMobileError('');
        } else {
          setMobileError('Mobile number entered is not registered for use');
        }
      } else {
        setMobileError('Mobile number entered is not registered for use');
      }
    });
  };
  const sendOtpLogin = params => {
    if (!state.isSent) {
      sendOTP(`+${callingCode}${params.mobile}`);
    } else {
      validateOtp();
    }
  };
  // const checkMobileValid = () => {
  //   if (callingCode === '61' || callingCode === 61) {
  //     var phoneExpression =
  //       /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/;
  //     if (tempMobile.match(phoneExpression)) {
  //       setMobileError('Please enter correct mobile number');
  //       setDisableOtp(true);
  //     } else {
  //       setMobileError('');
  //       setDisableOtp(false);
  //     }
  //   } else {
  //     var patt = new RegExp(
  //       /^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/,
  //     );
  //     if (!patt.test(tempMobile)) {
  //       setMobileError('Please enter correct mobile number');
  //       setDisableOtp(true);
  //     } else {
  //       setMobileError('');
  //       setDisableOtp(false);
  //     }
  //   }
  // };
  const resendOTP = params => {
    sendOTP(`+${callingCode}${params.mobile}`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{flex: 1, height: '100%'}}
        ref={scrolltoview}
        onContentSizeChange={() =>
          scrolltoview.current.scrollToEnd({animated: true})
        }>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={'always'}
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          behavior="padding">
          <TouchableOpacity
            onPress={() => props.navigation.navigate('UserType')}>
            <View style={styles.headerStyle}>
              <Image style={styles.headerIcon} source={Images.Property.Back} />
            </View>
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <Image
              source={
                userType === 'owner'
                  ? Images.Login.Login
                  : Images.Login.LoginAuditor
              }
              style={styles.imageIcon}
            />
          </View>
          <View
            style={[
              styles.textContainer,
              isKeyboardVisible ? styles.hasPadding : styles.noPadding,
            ]}>
            <Text style={styles.headerText}>
              {userType === 'owner' ? 'Login for Owner' : 'Login for Auditor'}
            </Text>
            <View>
              <Controller
                control={control}
                render={({field: {onChange, value}}) => (
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // width: '95%',
                        flexWrap: 'wrap',
                      }}>
                      <View style={styles.enterMobileField}>
                        <Text style={styles.mobileText}>
                          Enter Mobile Number
                        </Text>
                        <TouchableOpacity
                          onPress={() => submitModal.current.open()}>
                          <View style={styles.helpIconStyle}>
                            <Image
                              style={styles.helpIcon}
                              source={Images.Login.QuestionIcon}
                            />
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={[styles.countryBox, {borderColor: '#ddd'}]}
                        pointerEvents={state.isSent ? 'none' : 'auto'}>
                        <CountryPicker
                          countryCode={countryCode}
                          withFilter
                          withFlag
                          withCountryNameButton={false}
                          withAlphaFilter
                          withCallingCode
                          withEmoji
                          onSelect={onSelect}
                          onClose={() => setVisible(false)}
                          visible={visible}
                        />
                        <TouchableOpacity onPress={() => setVisible(true)}>
                          <Text style={{marginRight: 5}}>
                            +{callingCode.join()}
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <TextInput
                        editable={!state.isSent}
                        keyboardType="numeric"
                        maxLength={maximumLength}
                        style={[
                          styles.mobileInput,
                          {
                            borderColor: '#ddd',
                            width: '80%',
                          },
                        ]}
                        onChangeText={value => onChange(onlyNumeric(value))}
                        value={inputValues ? value : ''}
                      />
                    </View>
                    {mobileError ? (
                      <Text style={{color: 'red'}}>{mobileError}</Text>
                    ) : (
                      <Text> </Text>
                    )}
                  </View>
                )}
                name="mobile"
                rules={{
                  required: true,
                  minLength: 8,
                }}
                defaultValue=""
              />
            </View>
            {state.isSent ? (
              Platform.OS === 'ios' ? (
                <View>
                  <View style={styles.otpContainer}>
                    <TextInput
                      keyboardType="numeric"
                      style={styles.input}
                      maxLength={1}
                      numberOfLines={1}
                      value={holder1}
                      onKeyPress={({nativeEvent}) => {
                        if (nativeEvent.key === 'Backspace') {
                          setHolder1('');
                        } else {
                          if (validateNumeric(nativeEvent.key)) {
                            setHolder1(nativeEvent.key);
                            holderText2.current.focus();
                          }
                        }
                      }}
                      ref={holderText1}
                    />
                    <TextInput
                      keyboardType="numeric"
                      style={styles.inputEnd}
                      maxLength={1}
                      numberOfLines={1}
                      value={holder2}
                      onKeyPress={({nativeEvent}) => {
                        if (nativeEvent.key === 'Backspace') {
                          setHolder2('');
                          holderText1.current.focus();
                        } else {
                          if (validateNumeric(nativeEvent.key)) {
                            setHolder2(nativeEvent.key);
                            holderText3.current.focus();
                          }
                        }
                      }}
                      ref={holderText2}
                    />
                    <TextInput
                      keyboardType="numeric"
                      style={styles.input}
                      maxLength={1}
                      numberOfLines={1}
                      value={holder3}
                      onKeyPress={({nativeEvent}) => {
                        if (nativeEvent.key === 'Backspace') {
                          setHolder3('');
                          holderText2.current.focus();
                        } else {
                          if (validateNumeric(nativeEvent.key)) {
                            setHolder3(nativeEvent.key);
                            holderText4.current.focus();
                          }
                        }
                      }}
                      ref={holderText3}
                    />
                    <TextInput
                      keyboardType="numeric"
                      style={styles.inputEnd}
                      maxLength={1}
                      numberOfLines={1}
                      value={holder4}
                      onKeyPress={({nativeEvent}) => {
                        if (nativeEvent.key === 'Backspace') {
                          setHolder4('');
                          holderText3.current.focus();
                        } else {
                          if (validateNumeric(nativeEvent.key)) {
                            setHolder4(nativeEvent.key);
                            holderText5.current.focus();
                          }
                        }
                      }}
                      ref={holderText4}
                    />
                    <TextInput
                      keyboardType="numeric"
                      style={styles.input}
                      maxLength={1}
                      numberOfLines={1}
                      value={holder5}
                      onKeyPress={({nativeEvent}) => {
                        if (nativeEvent.key === 'Backspace') {
                          setHolder5('');
                          holderText4.current.focus();
                        } else {
                          if (validateNumeric(nativeEvent.key)) {
                            setHolder5(nativeEvent.key);
                            holderText6.current.focus();
                          }
                        }
                      }}
                      ref={holderText5}
                    />
                    <TextInput
                      keyboardType="numeric"
                      style={styles.inputEnd}
                      maxLength={1}
                      numberOfLines={1}
                      value={holder6}
                      onKeyPress={({nativeEvent}) => {
                        if (nativeEvent.key === 'Backspace') {
                          setHolder6('');
                          holderText5.current.focus();
                        } else {
                          if (validateNumeric(nativeEvent.key)) {
                            setHolder6(nativeEvent.key);
                          }
                        }
                      }}
                      ref={holderText6}
                    />
                  </View>
                  <View style={styles.resendView}>
                    <Text style={styles.txtResend}>Didn't recieve a code?</Text>
                    <TouchableOpacity onPress={handleSubmit(resendOTP)}>
                      <Text style={styles.txtResendInner}> Resend </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View>
                  <View style={styles.otpContainer}>
                    <TextInput
                      keyboardType="numeric"
                      style={styles.input}
                      maxLength={1}
                      numberOfLines={1}
                      value={holder1}
                      onChangeText={text => {
                        setHolder1(text);
                        if (text.trim().length > 0) {
                          holderText2.current.focus();
                        }
                      }}
                      ref={holderText1}
                    />
                    <TextInput
                      keyboardType="numeric"
                      style={styles.inputEnd}
                      maxLength={1}
                      numberOfLines={1}
                      value={holder2}
                      onChangeText={text => {
                        setHolder2(text);
                        if (text.trim().length > 0) {
                          holderText3.current.focus();
                        } else {
                          holderText1.current.focus();
                        }
                      }}
                      ref={holderText2}
                    />
                    <TextInput
                      keyboardType="numeric"
                      style={styles.input}
                      maxLength={1}
                      numberOfLines={1}
                      value={holder3}
                      onChangeText={text => {
                        setHolder3(text);
                        if (text.trim().length > 0) {
                          holderText4.current.focus();
                        } else {
                          holderText2.current.focus();
                        }
                      }}
                      ref={holderText3}
                    />
                    <TextInput
                      keyboardType="numeric"
                      style={styles.inputEnd}
                      maxLength={1}
                      numberOfLines={1}
                      value={holder4}
                      onChangeText={text => {
                        setHolder4(text);
                        if (text.trim().length > 0) {
                          holderText5.current.focus();
                        } else {
                          holderText3.current.focus();
                        }
                      }}
                      ref={holderText4}
                    />
                    <TextInput
                      keyboardType="numeric"
                      style={styles.input}
                      maxLength={1}
                      numberOfLines={1}
                      value={holder5}
                      onChangeText={text => {
                        setHolder5(text);
                        if (text.trim().length > 0) {
                          holderText6.current.focus();
                        } else {
                          holderText4.current.focus();
                        }
                      }}
                      ref={holderText5}
                    />
                    <TextInput
                      keyboardType="numeric"
                      style={styles.inputEnd}
                      maxLength={1}
                      numberOfLines={1}
                      value={holder6}
                      onChangeText={text => {
                        setHolder6(text);
                        if (text.trim().length == 0) {
                          holderText5.current.focus();
                        }
                      }}
                      ref={holderText6}
                    />
                  </View>
                  <View style={styles.resendView}>
                    <Text style={styles.txtResend}>
                      Didn't recieve an code?
                    </Text>
                    <TouchableOpacity onPress={handleSubmit(resendOTP)}>
                      <Text style={styles.txtResendInner}> Resend </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            ) : (
              <View style={styles.separator} />
            )}

            <TouchableOpacity
              style={styles.buttonStyle}
              //disabled={isDisableOtp}
              onPress={handleSubmit(sendOtpLogin)}
              underlayColor="#fff">
              <Text style={styles.loginText}>{loginText}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
      <Modal style={styles.modal} position={'center'} ref={submitModal}>
        <Text style={styles.modalText}>
          Enter your 9-digit mobile number without the Prefix 0.
        </Text>
        <Text style={styles.modalText}>For example, +61 411234567</Text>
        <View style={styles.modalButtons}>
          <TouchableOpacity
            onPress={() => submitModal.current.close()}
            style={styles.modalCancel}>
            <Text style={styles.modalButtonTextCancel}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
