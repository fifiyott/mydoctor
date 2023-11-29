import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { dummyNews } from '../../../assets'

const NewsItem = () => {
  return (
    <View>
      <Text>Is it safe to stay at home during coronavirus?</Text>
      <Text>Today</Text>
      <Image source={dummyNews} />
    </View>
  )
}

export default NewsItem

const styles = StyleSheet.create({})