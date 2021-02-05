import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Button, Gap, Header, Profile } from '../../components'
import ListProfile from '../../components/molecules/ListProfile'
import { colors } from '../../utils'

const DoctorProfile = ({navigation, route}) => {
  const dataDoctor = route.params
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}> 
      <Header title="Doctor Profile" onPress={() => navigation.goBack()}  />
      <Profile name={dataDoctor.data.fullName} desc={dataDoctor.data.profession} photo={{ uri: dataDoctor.data.photo }} />
      <Gap height={10} />
      <ListProfile label="Alumnus" value={dataDoctor.data.university} />
      <ListProfile label="Tempat Praktik" value={dataDoctor.data.hospital_address} />
      <ListProfile label="No. STR" value={dataDoctor.data.str_number} />
      <View style={styles.action}>
        <Button title="Start Consulting" onPress={() => navigation.navigate('Chatting', dataDoctor)} />
      </View>
    </ScrollView>
  )
}

export default DoctorProfile

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  action: {
    paddingTop: 23,
    paddingHorizontal: 40
  }
})
