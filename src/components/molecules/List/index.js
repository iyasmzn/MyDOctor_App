import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconEditProfile, IconHelp, IconLanguage, IconNext, IconRate } from '../../../assets'
import { colors, fonts } from '../../../utils'

const List = ({ avatar, name, desc, type, onPress, icon }) => {
  const Icon = () => {
    if (icon === "edit-profile") {
      return <IconEditProfile />
    }
    if (icon === "language") {
      return <IconLanguage />
    }
    if (icon === "rate") {
      return <IconRate />
    }
    if (icon === "help") {
      return <IconHelp />
    }
    return <IconEditProfile />
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      { icon ? <Icon /> : <Image source={avatar} style={styles.avatar} /> }
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {
        type == "next" && <IconNext />
      }
    </TouchableOpacity>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46/2
  },
  content: {
    flex: 1,
    marginLeft: 12
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary
  }
})
