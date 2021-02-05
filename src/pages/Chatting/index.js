import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { ChatItem, Header } from '../../components'
import InputChat from '../../components/molecules/InputChat'
import { colors, fonts, getData } from '../../utils'
import { Firebase } from '../../config'

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params
  const [chatContent, setChatContent] = useState('')
  const [user, setUser] = useState({})
  useEffect(() => {
    getData('user').then(res => {
      setUser(res)
    })
  }, [])
  const chatSend = () => {
    console.log(chatContent)
    const today = new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: `${hour}:${minutes} ${hour > 12 ? 'PM' : 'AM'}`,
      chatContent: chatContent,
    }
    console.log('data untuk dikirim: ', data)
    setChatContent('')
    Firebase.database().ref(`chatting/${user.uid}_${dataDoctor.data.uid}/allChat/${year}-${month}-${date}`)
      .push(data)
  }
  
  return (
    <View style={styles.page}>
      <Header title={dataDoctor.data.fullName} category={dataDoctor.data.category} photo={dataDoctor.data.photo} type="dark-profile" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.chatDate}>Selasa, 23 April 2001</Text>
          <ChatItem isMe />
          <ChatItem />
          <ChatItem />
        </ScrollView>
      </View>
      <InputChat value={chatContent} onChangeText={value => setChatContent(value)} onButtonPress={chatSend} />
    </View>
  )
}

export default Chatting

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1
  },
  content: {
    flex: 1
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
    marginVertical: 20
  }
})
