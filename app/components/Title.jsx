import {View, Text} from 'react-native';
import React from 'react';

const Title = ({text, top}) => {
  return (
    <View>
      <Text
        style={{
          color: 'black',
          fontSize: 15,
          textAlign: 'center',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          paddingTop: top? top: '20'
        }}>
        {text ? text : ''}
      </Text>
    </View>
  );
};

export default Title;
