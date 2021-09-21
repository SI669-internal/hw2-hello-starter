import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MainApp extends React.Component {

  constructor() {
    super();

    this.helloPhrases = [
      'Hello World!',
      'Hola Mundo!',
      'Hallo Welt!',
      '你好，世界!',
      '안녕 지구촌!', 
      'नमस्ते विश्व!'
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1}>
          <Text style={styles.label1}>{this.helloPhrases[0]}</Text>
        </View>
        <View style={styles.view2}>
        </View>
        <View style={styles.view3}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  view1: {
    flex: 0.3,
    backgroundColor: 'grey',
    width: '90%',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  label1 : {
    fontSize: 44,
    color: 'pink',
  }, 
  view2: {
    flex: 0.2,
    backgroundColor: 'gray',
    width: '90%',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  view3: {
    flex: 0.1,
    width: '90%',
    backgroundColor: 'gray',
    alignItems: 'center', 
    justifyContent: 'center',
  },
});

export default MainApp;
