import React, {useState, useEffect} from 'react';
import { Modal, ImageBackground, StyleSheet, View, Dimensions, ScrollView, 
         SafeAreaView, TouchableOpacity, Text, ActivityIndicator, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import moment from 'moment'
import 'moment/locale/id'

import umum from '../../assets/umum.png';
import mata from '../../assets/mata.png';
import kulit from '../../assets/kulit.png';
import paru from '../../assets/paru.png';
import saraf from '../../assets/saraf.png';
import tht from '../../assets/tht.png';
import gigi from '../../assets/gigi.png';
  
const HomeScreen = ({ navigation }) => {

  const [visible, setVisible] = useState(false);
  const [data, setData]=useState({
    confirmed:'',
    recovered:'',
    deaths:'',
    country:'',
    updated:''
  })
  const [daftarCovid, setDaftarCovid] =  useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isAnimating, setisAnimating] = useState(true);
  const [daftarBerita, setDaftarBerita] = useState(null);

  useEffect( () => {
    if (daftarCovid === null){
      axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=Indonesia`)
      .then(res => {
        let cov = res.data.All;
        setData({confirmed: cov.confirmed, recovered: cov.recovered, deaths: cov.deaths, country: cov.country, updated: cov.updated});
        setDaftarCovid(res.data.data);
        setisLoading(true);
        setisAnimating(false);
      })
    } if (daftarBerita === null){
      axios.get(`https://dokterbee.sashi.id/api/get_news`)
      .then(res => {
        const berita = res.data;
        setDaftarBerita(berita);
      })
    }
  }, [daftarCovid])

  const date = new Date(data.updated);

  return (
      <>
      <SafeAreaView>
          <ScrollView>
              <View style={styles.container}>
                <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} onPress={() => navigation.navigate('Spesialis', { itemId: 14, otherParam: 'Dokter Umum' })} style={styles.card}>
                  <View style={styles.cardView}>
                    <ImageBackground style={styles.img} source={umum}/>
                    <Text style={styles.textMenu}>Dokter Umum</Text>
                  </View>
                </Pressable>
                <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} onPress={() => navigation.navigate('Spesialis', { itemId: 1, otherParam: 'Spesialis Mata' })} style={styles.card}>
                  <View style={styles.cardView}>
                    <ImageBackground style={styles.img} source={mata}/>
                    <Text style={styles.textMenu}>Spesialis Mata</Text>
                  </View>
                </Pressable>
                <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} onPress={() => navigation.navigate('Spesialis', { itemId: 11, otherParam: 'Spesialis Kulit & Kelamin' })} style={styles.card}>
                <View style={styles.cardView}>
                  <ImageBackground style={styles.img} source={kulit}/>
                  <Text style={styles.textMenu}>Kulit & Kelamin</Text>
                </View>
                </Pressable>
                <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} onPress={() => navigation.navigate('Spesialis', { itemId: 8, otherParam: 'Spesialis Saraf' })} style={styles.card}>
                <View style={styles.cardView}>
                  <ImageBackground style={styles.img} source={saraf}/>
                  <Text style={styles.textMenu}>Spesialis Saraf</Text>
                </View>
                </Pressable>
                <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} onPress={() => navigation.navigate('Spesialis', { itemId: 13, otherParam: 'Dokter Gigi' })} style={styles.card}>
                <View style={styles.cardView}>
                  <ImageBackground style={styles.img} source={gigi}/>
                  <Text style={styles.textMenu}>Dokter Gigi</Text>
                </View>
                </Pressable>
                <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} onPress={() => navigation.navigate('Spesialis', { itemId: 12, otherParam: 'Spesialis THT' })} style={styles.card}>
                <View style={styles.cardView}>
                  <ImageBackground style={styles.img} source={tht}/>
                  <Text style={styles.textMenu}>Spesialis THT</Text>
                </View>
                </Pressable>
                <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} onPress={() => navigation.navigate('Spesialis', { itemId: 2, otherParam: 'Paru-Paru' })} style={styles.card}>
                <View style={styles.cardView}>
                  <ImageBackground style={styles.img} source={paru}/>
                  <Text style={styles.textMenu}>Spesialis Paru</Text>
                </View>
                </Pressable>
                <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} style={styles.card} onPress={() => setVisible(true)}>
                <View style={styles.cardView}>
                  <Ionicons style={styles.lainnya} name="grid" size={36} color="lightgrey" />
                  <Text style={styles.textMenu}>Lainnya</Text>
                </View>
                </Pressable>
              </View>
              <Modal hardwareAccelerated statusBarTranslucent={true} animationType="slide" transparent={true} visible={visible} backdropStyle={styles.backdrop} onRequestClose={() => { setVisible(false) }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Explore Dokterbee</Text>
                    <TouchableOpacity style={{elevation: 2}} onPress={() => {setVisible(false)} }>
                      <Text style={{fontWeight: "bold", marginLeft: Dimensions.get('screen').width / 2.3 , marginBottom: Dimensions.get('screen').height / 2.3}}>
                        <Ionicons style={styles.lainnya} name="close-circle" size={23} />
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              <Modal hardwareAccelerated transparent={true} visible={isAnimating}>
                <ActivityIndicator style={{flex: 1, marginTop: Dimensions.get('screen').width / 4, alignSelf: 'center'}} size="large" animating={isAnimating} color="skyblue"/>
              </Modal>
              {
                isLoading &&
                <Pressable android_ripple={{ color: 'lightgrey', borderless: false, }} onPress={() => navigation.navigate('WebScreen')} style={styles.anotherCard}>
                  <View style={styles.headerContainer}>
                    <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 5, fontSize: 18}}>Covid-19</Text>
                    <Text style={{color: 'white', marginLeft: 5, fontSize: 12}}>{data.country}</Text>
                  </View>
                  <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
                    <Text style={{marginRight: 35, color: 'darkorange'}}>Positif</Text>
                    <Text style={{marginRight: 20, color: 'darkgreen'}}>Sembuh</Text>
                    <Text style={{color: 'crimson'}}>Meninggal</Text>
                  </View>
                  <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginBottom: 10}}>
                    <Text style={{marginRight: 25}}>{parseFloat(data.confirmed).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                    <Text style={{marginRight: 25}}>{parseFloat(data.recovered).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                    <Text style={{marginRight: 25}}>{parseFloat(data.deaths).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                  </View>
                  <View style={styles.bottomContainer}>
                    <Text style={{color: 'white', marginLeft: 5, fontSize: 11}}>Update Terakhir : {moment(date).startOf('hour').fromNow().toString()}</Text>
                  </View>
                </Pressable>
              }
              <Text style={{fontWeight: 'bold',marginTop: 20, marginLeft: 20, marginBottom: 10, fontSize: 16}}>Info Kesehatan</Text>
              {
                  daftarBerita !== null && daftarBerita.map((item, index)=>{
                  const image = { uri: `https://dokterbee.sashi.id/storage/${item.thumbnail}` };
                  return(
                      <>
                      <View key={index} style={styles.tipsContainer}>
                        <Pressable android_ripple={{ color: 'lightgrey', borderless: false }} onPress={() => navigation.navigate('BeritaScreen', 
                        { otherParam: item.judul_berita, detailParam: item.detail, dateParam: item.created_at, thumbnailParam: image })} style={styles.otherCard}>
                          <View>
                            <Image style={{width: Dimensions.get('screen').width - 20, height: 130}} source={image} />
                            <Text style={{marginTop: 20, marginLeft: 20, marginRight: 20, fontWeight: 'bold'}}>{item.judul_berita}</Text>
                            <Text style={{marginTop: 5, marginLeft: 20, marginRight: 20, marginBottom: 20}}>{item.detail.substring(0, 89)}...</Text>
                          </View>
                        </Pressable>
                      </View>
                      </>
                      )
                  })
              }
          </ScrollView>
      </SafeAreaView>
      </>
  );
};
  
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  cardView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMenu: {
    fontSize: 11,
  },
  card: {
    margin: 5,
    height: 90,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 50,
    height: 50,
    marginTop: 2.5,
    marginBottom: 7.5,
  },
  lainnya: {
    marginTop: 10,
    marginBottom: 10,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    marginTop: Dimensions.get('screen').height / 1.8,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    flexDirection: 'row',
    flexWrap: 'wrap',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  anotherCard: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 25,
    width: Dimensions.get('screen').width - 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'skyblue', 
    padding: 12, 
    borderBottomLeftRadius: 0, 
    borderBottomRightRadius: 0, 
    borderTopLeftRadius: 5, 
    borderTopRightRadius: 5
  },
  bottomContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'skyblue', 
    padding: 12, 
    borderBottomLeftRadius: 5, 
    borderBottomRightRadius: 5, 
    borderTopLeftRadius: 0, 
    borderTopRightRadius: 0
  },
  otherCard: {
    margin: 10,
    width: Dimensions.get('screen').width - 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  tipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;