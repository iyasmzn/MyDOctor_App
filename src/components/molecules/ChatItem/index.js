import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import IsMe from './IsMe'
import IsOther from './IsOther'

const ChatItem = ({isMe}) => {
  if (isMe) {
    return <IsMe />
  } 
  return <IsOther />
}

export default ChatItem