import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import {FULL_WIDTH_SIZE} from '../utils/dimensions';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import FilterIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function TopHeader() {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/IW_logo.png')} style={styles.logo} />
      <View style={{flexDirection: 'row', marginRight: 30}}>
        <SearchIcon
          name="search"
          size={30}
          style={{paddingRight: 20}}
          color="white"
        />
        <FilterIcon name="filter-variant" size={30} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 20,
    width: FULL_WIDTH_SIZE,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logo: {
    height: 30,
    width: 30,
    marginLeft: 30,
  },
});

export default TopHeader;
