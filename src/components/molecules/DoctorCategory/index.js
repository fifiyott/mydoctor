import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ILCategory} from '../../../assets';
import {colors} from '../../../utils';

const DoctorCategory = () => {
  return (
    <View style={styles.card}>
      <ILCategory style={styles.logo} />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>dokter umum</Text>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardLight,
    padding: 12,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    height: 130,
    width: 100,
  },
  logo: {
    marginBottom: 28
  },
  label: {
    fontSize: 12, 
    fontFamily: 'APRO_Regular', 
    color: colors.text.primary},
  category: {
    fontSize: 12,
    fontFamily: 'aprobold',
    color: colors.text.primary,
  },
});
