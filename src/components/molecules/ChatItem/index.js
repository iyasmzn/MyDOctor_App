import React from 'react'
import IsMe from './IsMe'
import IsOther from './IsOther'

const ChatItem = ({isMe, text, time, photo}) => {
  if (isMe) {
    return <IsMe text={text} time={time} />
  } 
  return <IsOther text={text} time={time} photo={photo} />
}

export default ChatItem