import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  HomeProfile,
  DoctorCategory,
  RatedDoctor,
  NewsItem,
} from '../../components/molecules';
import {Gap} from '../../components';
import {colors} from '../../utils';

const Doctor = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <HomeProfile />
          {/* <Gap height={30} /> */}
          <Text style={styles.welcome}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.DoctorCategory}>
                <Gap width={16} />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <Gap width={6} />
              </View>
            </ScrollView>
          </View>
          <Text style={styles.titleText}>Top Rated Doctors</Text>
          <RatedDoctor />
          <RatedDoctor />
          <RatedDoctor />
          <Text style={styles.titleText}>Good News</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    fontFamily: 'APRO_Medium',
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 250,
  },
  DoctorCategory: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    // paddingVertical: 30,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleText: {
    fontFamily: 'APRO_Medium',
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: 16,
    marginTop: 30,
  },
});
