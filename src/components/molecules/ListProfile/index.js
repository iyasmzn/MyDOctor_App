import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const ListProfile = ({label, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

export default ListProfile

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderColor: colors.border,
    borderBottomWidth: 1
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginBottom: 6
  },
  value: {
    fontSize: 14,
    color: colors.text.primary
  }
})
