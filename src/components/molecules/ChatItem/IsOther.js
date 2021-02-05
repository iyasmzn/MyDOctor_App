import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDoctor11 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const IsOther = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor11} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>Oh tentu saja tidak karena jeruk itu sangat sehat...</Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  )
}

export default IsOther

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 20,
    paddingLeft: 16
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30/2,
    marginRight: 12
  },
  chatContent: {
    padding: 12,
    paddingLeft: 18,
    backgroundColor: colors.primary,
    maxWidth: '75%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.primary
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary[400],
    color: colors.secondary,
    marginTop: 8
  }
})
