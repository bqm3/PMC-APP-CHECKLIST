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
  Alert,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import React, {useEffect, useState, useRef} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {COLORS, SIZES} from '../constants/theme';
import Title from '../components/Title';
import ButtonSubmit from '../components/ButtonSubmit';

const HideKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const dataList = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const LoginScreen = ({navigation}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [value, setValue] = useState();
  const ref = useRef(null);
  const [data, setData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textInputChange = (val) => {
    const emailPattern = /\S+@\S+\.\S+/; // Pattern đơn giản cho địa chỉ email

    if (emailPattern.test(val)) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 3) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    const emailPattern = /\S+@\S+\.\S+/; // Pattern đơn giản cho địa chỉ email

    if (emailPattern.test(val)) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

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
          <View
            style={[styles.container, {width: SIZES.width, marginBottom: 40}]}>
            <Image
              style={{width: 224, height: 150, resizeMode: 'contain'}}
              source={require('../../assets/company_logo.png')}
            />
            <View style={[styles.container, {width: '80%'}]}>
              <Title text={'Đăng nhập'} size={20} top={10} />
              <View
                style={{
                  marginTop: 20,
                  justifyContent: 'flex-start',
                  width: '100%',
                }}>
                <View style={styles.action}>
                  <TextInput
                    placeholder="Nhập tài khoản"
                    placeholderTextColor="#666666"
                    style={[styles.textInput]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
                </View>

                <View style={styles.action}>
                  <TextInput
                    placeholder="Nhập mật khẩu"
                    placeholderTextColor="#666666"
                    style={[styles.textInput]}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                    secureTextEntry={data?.secureTextEntry ? true : false}
                  />
                  <TouchableOpacity
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={updateSecureTextEntry}
                    >
                    {data?.secureTextEntry ? (
                      <Image
                        style={{
                          width: 20,
                          height: 20,
                          resizeMode: 'contain',
                        }}
                        source={require('../../assets/eye.png')}
                      />
                    ) : (
                      <Image
                        style={{
                          width: 20,
                          height: 20,
                          resizeMode: 'contain',
                        }}
                        source={require('../../assets/hidden.png')}
                      />
                    )}
                  </TouchableOpacity>
                </View>

                <View style={styles.action}>
                  <TextInput
                    placeholder="Nhập email"
                    placeholderTextColor="#666666"
                    style={[styles.textInput]}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                    // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
                </View>

                <Dropdown
                  ref={ref}
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={dataList}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Thuộc dự án"
                  searchPlaceholder="Search..."
                  value={value}
                  onChange={item => {
                    setValue(item.value);
                  }}
                  renderItem={renderItem}
                  confirmSelectItem
                  onConfirmSelectItem={item => {
                    Alert.alert('Confirm', 'Message confirm', [
                      {
                        text: 'Cancel',
                        onPress: () => {},
                      },
                      {
                        text: 'Confirm',
                        onPress: () => {
                          setValue(item.value);
                          ref.current.close();
                        },
                      },
                    ]);
                  }}
                  //   renderLeftIcon={() => (
                  //   )}
                />

                <View style={{height: 20}} />
                <ButtonSubmit text={'Đăng Nhập'} onPress={() => {}} />
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
                fontWeight: '700',
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
    height: 50,
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
    width: '88%',
    fontSize: 16,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },

  dropdown: {
    marginTop: 12,
    height: 50,
    paddingHorizontal: 12,
    backgroundColor: 'white',
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
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#05375a',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#05375a',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
