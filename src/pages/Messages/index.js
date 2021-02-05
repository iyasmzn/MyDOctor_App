import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3, DummyDoctor4, DummyDoctor5, DummyDoctor6 } from '../../assets'
import { List } from '../../components'
import { colors, fonts } from '../../utils'

const Messages = ({navigation}) => {
  const [doctors] = useState([
    {
      id: 1,
      avatar: DummyDoctor1,
      name: 'Alexandra Lien',
      desc: 'Baik bu, Terima kasih banyak atas waktunya b...'
    },
    {
      id: 2,
      avatar: DummyDoctor2,
      name: 'Alexandra Lien',
      desc: 'Baik bu, Terima kasih banyak atas waktunya b...'
    },
    {
      id: 3,
      avatar: DummyDoctor3,
      name: 'Alexandra Lien',
      desc: 'Baik bu, Terima kasih banyak atas waktunya b...'
    },
    {
      id: 4,
      avatar: DummyDoctor4,
      name: 'Alexandra Lien',
      desc: 'Baik bu, Terima kasih banyak atas waktunya b...'
    },
    {
      id: 5,
      avatar: DummyDoctor5,
      name: 'Alexandra Lien',
      desc: 'Baik bu, Terima kasih banyak atas waktunya b...'
    },
    {
      id: 6,
      avatar: DummyDoctor6,
      name: 'Alexandra Lien',
      desc: 'Baik bu, Terima kasih banyak atas waktunya b...'
    },
  ])
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {
          doctors.map(doctor => {
            return <List key={doctor.id} avatar={doctor.avatar} name={doctor.name} desc={doctor.desc} onPress={() => navigation.navigate('Chatting')} />
          })
        }
      </View>
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16
  }
})
