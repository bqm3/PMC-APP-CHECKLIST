import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import { FontAwesome } from '@expo/vector-icons';
import {COLORS, SIZES} from '../constants/theme';
import Title from '../components/Title';
import ButtonSubmit from '../components/ButtonSubmit';

const HideKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const LoginScreen = ({navigation}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <>
      <HideKeyboard>
        <View style={[styles.container, {flex: 1}]}>
          <View style={[styles.container, {width: SIZES.width}]}>
            <Image
              style={{width: 224, height: 150, resizeMode: 'contain'}}
              source={require('../../assets/company_logo.png')}
            />
            <View style={[styles.container, {width: '80%'}]}>
              <Title text={'Đăng nhập'} top={20} />
              <View
                style={{
                  marginTop: 20,
                  justifyContent: 'flex-start',
                  width: '100%',
                }}>
                <View style={styles.action}>
                  {/* <FontAwesome name="user" color={'black'} size={20} /> */}
                  <TextInput
                    placeholder="Nhập tài khoản"
                    placeholderTextColor="#666666"
                    style={[styles.textInput]}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                    // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
                </View>

                <View style={styles.action}>
                  {/* <FontAwesome name="user-o" color={'black'} size={20} /> */}
                  <TextInput
                    placeholder="Nhập mật khẩu"
                    placeholderTextColor="#666666"
                    style={[styles.textInput]}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                    // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
                  {/* <TouchableOpacity onPress={updateSecureTextEntry}>
                  {data.secureTextEntry ? (
                    <Feather name="eye-off" color="grey" size={20} />
                  ) : (
                    <Feather name="eye" color="grey" size={20} />
                  )}
                </TouchableOpacity> */}
                </View>

                <View style={styles.action}>
                  {/* <FontAwesome name="user" color={'black'} size={20} /> */}
                  <TextInput
                    placeholder="Nhập email"
                    placeholderTextColor="#666666"
                    style={[styles.textInput]}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                    // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
                </View>
                <View style={{height: 20}} />
                <ButtonSubmit text={'Đăng Nhập'} onPress={()=>{}}/>
              </View>
            </View>
          </View>
        </View>
      </HideKeyboard>

      {isKeyboardVisible === true ? (
        <></>
      ) : (
        <>
          <View
            style={{
              backgroundColor: COLORS.bg_main,
              position: 'absolute',
              bottom: 0,
              height: 40,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
              }}>
              Copyright by @Phòng số hóa - PMC
            </Text>
          </View>
        </>
      )}
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bg_white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 9.22,
    elevation: 12,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    paddingBottom: 2,
  },
  textInput: {
    paddingLeft: 12,
    color: '#05375a',
    width: '90%',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
});
