import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { IconStar, dummyDoctor } from '../../../assets'
import { colors } from '../../../utils'

const RatedDoctor = () => {
  return (
    <View style={styles.container}>
      <Image source={dummyDoctor} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Alexa Rachel</Text>
        <Text style={styles.category}>Pediatrician</Text>
      </View>
      <View style={styles.star}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  )
}

export default RatedDoctor

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 16
  },
  avatar: {
    width:50, height: 50, borderRadius: 50/2, marginRight: 12
  },
  star: {
    justifyContent: 'flex-end', flexDirection: 'row'
  },
  name: {
    fontSize: 16, fontFamily: 'APRO_Medium', color: colors.text.primary
  },
  category: {
    fontSize: 12, fontFamily: 'APRO_Regular', color: colors.text.secondary, marginTop:5
  },
  profile : {
    flex: 1
  }
})