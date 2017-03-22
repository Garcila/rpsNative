import React from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

const Winner = ({ children, p }) => {
  console.log(`props is: ${p}`);
  return (
    <Card >
      <CardSection>
        <Text style={styles.cardStyle}>{children}</Text>
      </CardSection>
    </Card>
  );
};

const styles = {
  cardStyle: {
    paddingTop: 40,
    backgroundColor: '#ff982f',
    color: '#fff',
    height: 300,
    fontSize: 50,
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center'
  }
};

export default Winner;
