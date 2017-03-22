import React from 'react';
import { View } from 'react-native';
import { Header, Footer } from './src/components/common';
import GameArea from './src/components/GameArea';


export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }} >
        <Header textHeader='Rock - Paper - Scissors' />
        <GameArea />
        <Footer textFooter='Usable, but ugly as it gets' />
      </View>
    );
  }
}
