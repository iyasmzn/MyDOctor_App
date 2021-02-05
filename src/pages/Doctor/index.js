import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { Firebase } from '../../config'
import { colors, fonts, showError } from '../../utils'

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([])
  const [categoryDoctor, setCategoryDoctor] = useState([])
  const [topRatedDotor, setTopRatedDoctor] = useState([])
  useEffect(() => {
    getCategoryDoctor()
    getTopRatedDoctor()
    getNews()
  }, [])

  const getTopRatedDoctor = () => {
    Firebase.database().ref('doctors/')
    .orderByChild('rate').limitToLast(3)
    .once('value').then(res => {
      if (res.val()) {
        const oldData = res.val()
        const data = []
        Object.keys(oldData).map(key => {
          data.push({
            id: key,
            data: oldData[key]
          })
        })
        setTopRatedDoctor(data)
      }
    }).catch(err => {
      showError(err.message)
    })
  }

  const getCategoryDoctor = () => {
    Firebase.database().ref('category/').once('value').then(res => {
      console.log('data: ', res)
      if (res.val()) {
        const data = res.val()
        const filterData = data.filter(el => el !== null)
        setCategoryDoctor(filterData)
      }
    }).catch(err => {
      showError(err.message)
    })
  }
  
  const getNews = () => {
  Firebase.database().ref('news/').once('value').then(res => {
    console.log('data: ', res)
    if (res.val()) {
      const data = res.val()
      const filterData = data.filter(el => el !== null)
      setNews(filterData)
    }
  }).catch(err => {
    showError(err.message)
  })
  }
  

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <View style={styles.wrapperSection}>
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.scrollWrapper}>
              <View style={styles.categories}>
                {categoryDoctor.map(item => {
                    return <DoctorCategory key={`category~${item.id}`} category={item.category} onPress={() => navigation.navigate("ChooseDoctor", item)} />
                  })
                }
              </View>
            </View>
          </ScrollView>
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          <View style={styles.wrapperSection}>
            {topRatedDotor.map(doctor => {
              return (
                <RatedDoctor key={doctor.id} name={doctor.data.fullName} desc={doctor.data.profession} avatar={{ uri: doctor.data.photo }} onPress={() => navigation.navigate('DoctorProfile', doctor)} />
              )
            })}
          </View>
          <Text style={styles.sectionLabel}>Good News</Text>
          {news.map(item => {
            return (
              <NewsItem key={item.id} title={item.title} date={item.date} image={item.image} />
            )
          })}
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  )
}

export default Doctor

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  wrapperSection: {
    paddingHorizontal: 16
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    marginTop: 30,
    marginBottom: 8,
    paddingHorizontal: 16
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 200
  },
  scrollWrapper: {
    marginHorizontal: 11
  },  
  categories: {
    flexDirection: 'row'
  }
})
