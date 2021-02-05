import React, { useEffect } from 'react'
import { useState } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { ILUserPhotoNull } from '../../assets'
import { Gap, Header, List, Profile } from '../../components'
import { colors, getData } from '../../utils'
import { Firebase } from '../../config'
import { showMessage } from 'react-native-flash-message'

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILUserPhotoNull
  })
  useEffect(() => {
    getData('user').then(res => {
      const data = res
      data.photo = { uri: res.photo }
      setProfile(data)
    })
  }, [])

  const signOut = () => {
    Firebase.auth().signOut().then(() => {
      navigation.replace('GetStarted')
    }).catch(err => {
      showMessage({
        message: err.message,
        type: 'default',
        backgroundColor: colors.error,
        color: colors.white
      })
    })
  }
  
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullName.length > 0 && 
        <Profile name={profile.fullName} desc={profile.profession} photo={profile.photo} />
      }
      <Gap height={14} />
      <List name="Edit Profile" desc="last update yesterday" type="next" icon="edit-profile" onPress={() => navigation.navigate('UpdateProfile')} />
      <List name="Language" desc="last update yesterday" type="next" icon="language" />
      <List name="Give Us Rate" desc="last update yesterday" type="next" icon="rate" />
      <List name="Sign Out" desc="last update yesterday" type="next" icon="help" onPress={signOut} />
    </ScrollView>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  }
})
