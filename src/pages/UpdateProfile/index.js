import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILUserPhotoNull } from '../../assets'
import { Button, Gap, Header, Input, Profile } from '../../components'
import { colors, getData, storeData } from '../../utils'
import { Firebase } from '../../config'
import { showMessage } from 'react-native-flash-message'
import { launchImageLibrary } from 'react-native-image-picker'

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
    photo: ILUserPhotoNull
  })
  const [password, setPassword] = useState('')
  const [photo, setPhoto] = useState(ILUserPhotoNull)
  const [photoForDB, setPhotoForDB] = useState('')

  useEffect(() => {
    getData('user').then(res => {
      const data = res
      setPhoto({ uri: res.photo })
      setProfile(data)
    })
  }, [])

  const update = () => {
    console.log('profile : ', profile)
    
    const updatePassword = () => {
      Firebase.auth().onAuthStateChanged(user => {
        if (user) {
          user.updatePassword(password).catch(err => {
            showMessage({
              message: err.message,
              type: 'default',
              backgroundColor: colors.error,
              color: colors.white
            })    
          })
        }
      })
    }
    
    const updateProfileData = () => {
      const data = profile
      data.photo = photoForDB
      
      Firebase.database().ref(`users/${profile.uid}/`)
        .update(data)
        .then(() => {
          console.log('success')
          storeData('user', data)
        }).catch(err => {
          showMessage({
            message: err.message,
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white
          })
        })
    }

    if (password.length > 0) {
      if (password.length < 6 ) {
        showMessage({
          message: 'Password Kurang Dari 6',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white
        })
      } else {
        updatePassword()
        updateProfileData()
        navigation.replace('MainApp')
      }
    } else {
      updateProfileData()
      navigation.replace('MainApp')
    }
    
  }

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value
    })
  }

  const getImage = () => {
    launchImageLibrary({includeBase64: true, quality: 0.3, maxHeight: 200, maxWidth: 200}, (response) => {
        if (response.didCancel || response.error) {
            showMessage({
                message: 'lah, nggak jadi upload foto toh?',
                type: 'default',
                backgroundColor: colors.error,
                color: colors.white
            })
        } else {
            setPhotoForDB(`data:${response.type};base64, ${response.base64}`)
            const source = {uri: response.uri}
            setPhoto(source)
        }
    })
  }
  
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove photo={photo} isRemove onPress={getImage} />
          <Gap height={10} />
          <Input label="Full Name" value={profile.fullName} onChangeText={value => changeText('fullName', value)} />
          <Gap height={24} />
          <Input label="Pekerjaan" value={profile.profession} onChangeText={value => changeText('profession', value)} />
          <Gap height={24} />
          <Input label="Email Address" value={profile.email} disable />
          <Gap height={24} />
          <Input label="Password" value={password} onChangeText={value => setPassword(value)} secureTextEntry />
          <Gap height={40} />
          <Button title="Save Profile" onPress={update} />
        </View>
      </ScrollView>
    </View>
  )
}

export default UpdateProfile

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  content: {
    padding: 40,
    paddingTop: 0
  }
})
