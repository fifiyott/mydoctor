import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconBack from '../../../assets/icon/back_arrow.svg';
import {Button, Gap} from '../../atoms';
import {colors, mainColors} from '../../../utils';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      {/* <IconBack /> */}
      <Button type='icon-only' iconProp='IconBackDark' onPress={onPress}/>
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    color: colors.text.primary,
    fontFamily: 'APRO_Medium',
    fontSize: 20,
  },
});
