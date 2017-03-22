import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
    >
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#c46705',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    minHeight: 40
  },
  textStyle: {
    alignSelf: 'center',
    color: '#bd5c02',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button };
