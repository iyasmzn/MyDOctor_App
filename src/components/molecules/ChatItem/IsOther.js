import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const IsOther = ({text, time, photo}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.date}>{time}</Text>
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
