import React from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../utils';
import IconBack from '../../../assets/icon/back_arrow.svg';
import IconOnly from './IconOnly';

const Button = ({type, title, onPress, iconProp}) => {
  if (type === 'icon-only') {
    return (
      <>
        <IconOnly iconProp={iconProp} onPress={onPress}/>
      </>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

// props untuk membedakan button
// props type untuk jenis button
// props title untuk nama buttonnya, jadi bisa beda2 sesuai design

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    fontFamily: 'APRO_Medium',
  }),
});
