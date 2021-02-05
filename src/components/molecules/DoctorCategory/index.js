import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ILDoctorAnak, ILDoctorObat, ILDoctorPsikiater, ILDoctorUmum } from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCategory = ({ category, onPress }) => {
  const Icon = () => {
    if (category === 'dokter umum') {
      return <Image source={ILDoctorUmum} style={styles.illustration} />
    }
    if (category === 'psikiater') {
      return <Image source={ILDoctorPsikiater} style={styles.illustration} />
    }
    if (category === 'dokter obat') {
      return <Image source={ILDoctorObat} style={styles.illustration} />
    }
    if (category === 'dokter anak') {
      return <Image source={ILDoctorAnak} style={styles.illustration} />
    }
    return <Image source={ILDoctorUmum} style={styles.illustration} />
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon />
        <Text style={styles.label}>Saya Butuh</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default DoctorCategory

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginHorizontal: 5,
    width: 105,
    height: 130
  },
  illustration: {
    width: 46,
    height: 46,
    marginBottom: 28
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary
  }
})
