import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

export default function Input({label}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
  },
  label: {
    fontFamily: 'APRO_Regular',
    marginBottom: 6,
    color: colors.text.secondary,
    fontSize: 16,
  },
});
