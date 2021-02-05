import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor10 } from '../../assets'
import { Header, List } from '../../components'
import { colors, showError } from '../../utils'
import { Firebase } from '../../config'

const ChooseDoctor = ({ navigation, route }) => {
  const [listDoctor, setListDoctor] = useState([])
  const itemCategory = route.params
  useEffect(() => {
    callDoctorByCategory(itemCategory.category)
  }, [])

  const callDoctorByCategory = (category) => {
    Firebase.database().ref('doctors/').orderByChild('category').equalTo(category).once('value').then(res => {
      if (res.val()) {
        const oldData = res.val()
        const data = []
        Object.keys(oldData).map(item => {
          data.push({
            id: item,
            data: oldData[item]
          })
        })
        setListDoctor(data)
      }
    }).catch(err => {
      showError(err.message)
    })
  }
  
  return (
    <View style={styles.page}>
      <Header title={`Pilih ${itemCategory.category}`} type="dark" onPress={() => navigation.goBack()} />
      {listDoctor.map(doctor => {
        return <List key={doctor.id} avatar={{ uri: doctor.data.photo }} name={doctor.data.fullName} desc={doctor.data.profession} type="next" onPress={() => navigation.navigate('DoctorProfile', doctor)} />
      })}
    </View>
  )
}

export default ChooseDoctor

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex:1
  }
})
