import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconArrowBackDark, IconArrowBackLight } from '../../../assets/icon'

const IconOnly = ({ onPress, icon }) => {
    const Icon = () => {
        if (icon === 'arrow-back-dark') {
            return <IconArrowBackDark />
        }
        if (icon === 'arrow-back-light') {
            return <IconArrowBackLight />
        }

        return <IconArrowBackDark />
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <Icon />
        </TouchableOpacity>
    )
}

export default IconOnly

const styles = StyleSheet.create({})
