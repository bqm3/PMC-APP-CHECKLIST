import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'

const ButtonSubmit = ({text, onPress}) => {
  return (
    <TouchableOpacity style={{
        width: '100%',
        backgroundColor: COLORS.bg_main,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 8
    }}
    onPress={onPress}
    >
      <Text style={{
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 16
      }}>{text ? text : ''}</Text>
    </TouchableOpacity>
  )
}

export default ButtonSubmit