import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

export default function Link({title, size, align, onPress}) {
  return (
    <TouchableOpacity style={styles.link} onPress={onPress}>
      <Text style={styles.titleStyle(size, align)}>{title}</Text>
    </TouchableOpacity>
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