import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import dummyUser from '../../../assets/dummy/user.png';
import {colors} from '../../../utils';
import { Gap } from '../../atoms';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={dummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Gap height={5} />
        <Text style={styles.profession}>Product Designer</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: 'APRO_Medium',
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: 'APRO_Regular',
    color: colors.text.secondary,
  },
});
