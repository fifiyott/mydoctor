import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomeProfile, DoctorCategory, RatedDoctor, NewsItem } from '../../components/molecules'
import { Gap } from '../../components'
import { colors } from '../../utils'

const Doctor = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <Gap height={30} />
      <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <Text>Top Rated Doctors</Text>
      <RatedDoctor/>
      <RatedDoctor/>
      <RatedDoctor/>
      <Text>Good News</Text>
      <NewsItem/>
      <NewsItem/>
      <NewsItem/>
    </View>
  )
}

export default Doctor

const styles = StyleSheet.create({
  page: {
    paddingVertical: 30, paddingHorizontal: 16
  },
  welcome: {
    fontSize: 20, fontFamily: 'APRO_Medium', color: colors.text.primary, marginTop:30, marginBottom: 16, maxWidth: 250
  }
})