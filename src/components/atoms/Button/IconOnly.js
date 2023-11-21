import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { IconBack } from '../../../assets';

export default function IconOnly({onPress, iconProp}) {
  const Icon = () => {
    if (iconProp === 'IconBackDark') {
      return <IconBack />;
    }
    if (iconProp === 'IconBackLight') {
      return <Text>IconBackLight</Text>;
    }
    return <IconBack />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
