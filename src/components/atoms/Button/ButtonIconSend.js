import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconSendDark, IconSendLight } from '../../../assets'
import { colors } from '../../../utils'

const ButtonIconSend = ({disable, onPress}) => {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <IconSendDark />
      </View>
    )
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(disable)}>
      <IconSendLight />
    </TouchableOpacity>
  )
}

export default ButtonIconSend

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    width: 45,
    height: 45,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
    borderRadius: 10
  })
})
