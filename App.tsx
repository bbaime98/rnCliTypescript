/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Alert
} from 'react-native';

import {Align, Colors} from './styles';
import TopHeader from './components/TopHeader';
import {Dimensions} from './styles';
import NoTasksAvailable from './components/NoTasksAvailable';
import AddButton from './components/AddButton';


const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blackSection}>
        <TopHeader />
      </View>
      <View style={styles.whiteSection} />
      <View style={styles.whiteCard}>
        <NoTasksAvailable />
        <View style={styles.addBtnContainer}>
        <AddButton onPress={() => Alert.alert("Yoo! what's up")}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addBtnContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: Dimensions.FULL_HEIGHT_SIZE / 20,
    right: 20,
  },
  container: {
    flex: 1,
    ...Align.CENTER
  },
  blackSection: {
    backgroundColor: Colors.black,
    position: 'absolute',
    height: '33%',
    width: '100%',
    top: 0,
  },
  whiteSection: {
    backgroundColor: Colors.medium,
    position: 'absolute',
    height: '68%',
    width: '100%',
    bottom: 0,
  },
  whiteCard: {
    backgroundColor: Colors.white,
    marginTop: 60,
    top: 20,
    width: '85%',
    height: Dimensions.FULL_HEIGHT_SIZE - 80,
    borderRadius: 5,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export default App;
