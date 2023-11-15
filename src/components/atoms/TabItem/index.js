import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import IconDoctor from '../../../assets/icon/icdoctor.svg';
import IconDoctorActive from '../../../assets/icon/icdoctor-active.svg';
import IconMessages from '../../../assets/icon/icmessages.svg';
import IconMessagesActive from '../../../assets/icon/icmessages-active.svg';
import IconHospital from '../../../assets/icon/ichospital.svg';
import IconHospitalActive from '../../../assets/icon/ichospital-active.svg';
import {colors} from '../../../utils';

const TabItem = ({title, active, onLongPress, onPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    }
    if (title === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    }
    if (title === 'Hospitals') {
      return active ? <IconHospitalActive /> : <IconHospital />;
    }
    return <IconDoctor />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: 'APRO_Medium',
    marginTop: 4,
  }),
});
