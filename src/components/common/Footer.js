import React from 'react';
import { View, Text } from 'react-native';

const Footer = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>
        {props.textFooter}
      </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    color: '#e1eefc',
    fontSize: 15,
    fontWeight: '400'
  },
  viewStyle: {
    backgroundColor: '#f58b0d',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

export { Footer };
