import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/theme';

const ButtonSubmit = ({text, onPress, isLoading, color}) => {
  return (
    <TouchableOpacity
      // disabled={handleNavigation?.check}
      style={{
        width: '100%',
        backgroundColor: color ? color : COLORS.bg_main,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 8,
      }}
      onPress={onPress}>
      {isLoading && (
        <ActivityIndicator
          style={{
            marginRight: 4,
          }}
          size="small"
          color={COLORS.bg_white}
        />
      )}

      <Text
        style={{
          color: 'white',
          fontSize: 15,
          textAlign: 'center',
          fontWeight: 'bold',
          paddingVertical: 16,
        }}>
        {text ? text : ''}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonSubmit;
