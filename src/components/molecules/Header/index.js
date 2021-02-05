import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button, Gap } from '../../atoms'
import DarkProfile from './DarkProfile'

const Header = ({ onPress, title, type, photo, category }) => {
    if (type === "dark-profile") {
        return <DarkProfile onPress={onPress} title={title} photo={photo} category={category} />
    }
    return (
        <View style={styles.container(type)}>
            <Button type="icon-only" icon={type === "dark" ? 'arrow-back-light' : 'arrow-back-dark'} onPress={onPress} />
            <Text style={styles.text(type)}>{title}</Text>
            <Gap width={24} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === "dark" ? colors.secondary : colors.white,
        paddingVertical: 30,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: type === "dark" ? 20 : 0,
        borderBottomRightRadius: type === "dark" ? 20 : 0
    }),
    text: type => ({
        flex: 1,
        textAlign: 'center',
        fontFamily: fonts.primary[600],
        fontSize: 20,
        color: type === "dark" ? colors.white : colors.text.primary
    })
})
