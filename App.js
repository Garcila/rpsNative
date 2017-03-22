import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/common';
import GameArea from './src/components/GameArea';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header textHeader='Rock - Paper - Scissors' />
        <GameArea />
      </View>
    );
  }
}
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
