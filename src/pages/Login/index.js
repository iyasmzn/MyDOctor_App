import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components/atoms'
import { Firebase } from '../../config'
import { colors, fonts, showError, storeData, useForm } from '../../utils'

const Login = ({ navigation }) => {
    const [form, setForm] = useForm({email: '', password: ''})
    const dispatch = useDispatch()

    const login = () => {
        // console.log('form : ', form)
        dispatch({type: 'SET_LOADING', value: true})
        Firebase.auth().signInWithEmailAndPassword(form.email, form.password)
            .then(res => {
                // console.log('success : ',res)
                dispatch({type: 'SET_LOADING', value: false})
                Firebase.database().ref(`users/${res.user.uid}/`).once('value').then(resDB => {
                    // console.log('data user : ',resDB.val())
                    if (resDB.val()) {
                        storeData('user', resDB.val())
                        navigation.replace('MainApp')
                    }
                })
            }).catch(err => {
                // console.log('error : ', err)
                dispatch({type: 'SET_LOADING', value: false})
                showError(err.message)
            })
    }
    return (
        <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
            <ILLogo />
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input label="Email Address" value={form.email} onChangeText={ value => setForm('email', value)} />
            <Gap height= {24} />
            <Input label="Password" value={form.password} onChangeText={ value => setForm('password', value)} secureTextEntry />
            <Gap height={10} />
            <Link title="Forgot my password" size={12} />
            <Gap height={40} />
            <Button title="Sign In" onPress={login} />
            <Gap height={30} />
            <Link title="Create new account" size={14} align="center" onPress={() => navigation.navigate('Register')} />
            <Gap height={60} />
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: colors.white,
        flex: 1
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginVertical: 40,
        maxWidth: 155
    }
})

