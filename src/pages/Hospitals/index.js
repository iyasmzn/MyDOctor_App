import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { DummyHospital1, DummyHospital2, DummyHospital3, ILHospitalsBackground } from '../../assets'
import { ListHospital } from '../../components'
import { colors, fonts } from '../../utils'

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalsBackground} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital 
          type="Rumah Sakit" 
          name="Citra Bunga Merdeka" 
          address="Jln. Surya Sejahtera 20" 
          picture={DummyHospital1} 
        />
        <ListHospital 
          type="Rumah Sakit Anak" 
          name="Happy Family & Kids" 
          address="Jln. Surya Sejahtera 20" 
          picture={DummyHospital2} 
        />
        <ListHospital 
          type="Rumah Sakit Jiwa" 
          name="Soul Practics" 
          address="Jln. Surya Sejahtera 20" 
          picture={DummyHospital3} 
        />
      </View>
    </View>
  )
}

export default Hospitals

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex:1
  },  
  background: {
    height: 240,
    paddingTop: 30
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white
  },
  desc: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 14,
    borderRadius: 20,
    marginTop: -30
  }
})
