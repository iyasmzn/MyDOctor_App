import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { launchImageLibrary } from 'react-native-image-picker'
import { IconAddPhoto, IconRemovePhoto, ILUserPhotoNull } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { Firebase } from '../../config'
import { colors, fonts, storeData } from '../../utils'

const UploadPhoto = ({navigation, route}) => {
    const { profession, fullName, uid } = route.params
    const [photoForDB, setPhotoForDB] = useState('')
    const [hasPhoto, setHasPhoto] = useState(false)
    const [photo, setPhoto] = useState(ILUserPhotoNull)
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
                setHasPhoto(true)
            }
        })
    }

    const uploadAndContinue = () => {
        Firebase.database().ref('users/'+ uid + '/').update({photo: photoForDB})
        
        const data = route.params
        data.photo = photoForDB
        storeData('user', data)
        
        navigation.replace('MainApp')
    }

    return (
        <View style={styles.page}>
            <Header title="Upload Photo" />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
                        <Image source={photo} style={styles.avatar} />
                        {hasPhoto ? 
                            <IconRemovePhoto style={styles.addPhoto} />
                        :
                            <IconAddPhoto style={styles.addPhoto} />
                        }
                    </TouchableOpacity>
                    <Text style={styles.name}>{fullName}</Text>
                    <Text style={styles.profession}>{profession}</Text>
                </View>
                <View>
                    <Button disable={!hasPhoto} title="Upload and Continue" onPress={uploadAndContinue} />
                    <Gap height={30} />
                    <Link title="Skip for this" align="center" size={16} onPress={() => navigation.replace('MainApp')} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 40,
        paddingBottom: 64
    }, 
    profile: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPhoto: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary[400],
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4
    },
    avatar: {
        height: 110, width: 110,
        borderRadius: 110/2
    }
})
