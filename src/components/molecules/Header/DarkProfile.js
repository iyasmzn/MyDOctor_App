import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const DarkProfile = ({onPress, title, category, photo}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="arrow-back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.desc}>{category}</Text>
      </View>
      <Image source={{ uri: photo }} style={styles.avatar} />
    </View>
  )
}

export default DarkProfile

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    flex:1
  },
  avatar: {
    width: 46, 
    height: 46, 
    borderRadius: 46/2, 
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center'
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.subTitle,
    textAlign: 'center',
    marginTop: 4
  }
})
