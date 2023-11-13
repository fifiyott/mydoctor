import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

export default function Link({title, size, align}) {
  return (
    <View style={styles.link}>
      <Text style={styles.titleStyle(size, align)}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    link: {
        
    },
    titleStyle: (size, align) => ({
        fontFamily: 'APRO_Regular', 
        fontSize: size === 'cna' ? 16 : 12, 
        textDecorationLine: 'underline', 
        color: colors.text.secondary, 
        textAlign: align === 'cna' ? 'center' : 'left'
    })
})