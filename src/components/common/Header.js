import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>
        {props.textHeader}
      </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    color: '#e1eefc',
    fontSize: 23,
    fontWeight: '400'
  },
  viewStyle: {
    backgroundColor: '#f0880d',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

export { Header };
