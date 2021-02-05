import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const InputChat = ({ value, onChangeText, onButtonPress }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis pesan untuk Nairobi" value={value} onChangeText={onChangeText} />
      <Button type="button-icon-send" disable={value.length < 1} onPress={onButtonPress} />
    </View>
  )
}

export default InputChat

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0)'
  },  
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary[400],
    maxHeight: 45
  }
})
