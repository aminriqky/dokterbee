import React, {useState, useEffect} from 'react';
import { Modal, ImageBackground, StyleSheet, View, Dimensions, ScrollView, 
         TouchableOpacity, Text, ActivityIndicator, Pressable, Image } from 'react-native';
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
import dalam from '../../assets/dalam.png';
import kandungan from '../../assets/kandungan.png';
import bedah from '../../assets/bedah.png';
import anak from '../../assets/anak.png';
import jantung from '../../assets/jantung.png';
import lambung from '../../assets/lambung.png';
import bdplas from '../../assets/bdplas.png';
import onko from '../../assets/onko.png';
import rehab from '../../assets/rehab.png';
import pato from '../../assets/pato.png';
import radio from '../../assets/radio.png';

  
const HomeScreen = ({ navigation }) => {

  const [visible, setVisible] = useState(false);
  const [data, setData]=useState({
    id:'',
    confirmed:'',
    recovered:'',
    deaths:'',
    country:'',
    updated:''
  })
  const [daftarCovid, setDaftarCovid] =  useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isAnimating, setisAnimating] = useState(true);

  useEffect( () => {
    if (daftarCovid === null){
      axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=Indonesia`)
      .then(res => {
        let cov = res.data.All;
        setData({id: cov.id, confirmed: cov.confirmed, recovered: cov.recovered, deaths: cov.deaths, country: cov.country, updated: cov.updated});
        setDaftarCovid(res.data.data);
        setisLoading(true);
        setisAnimating(false);
      })
    }
  }, [daftarCovid])

  const date = new Date(data.updated);

  return (
    <>
    <ScrollView>
      <View style={{width: Dimensions.get('screen').width, height: 140, backgroundColor: 'skyblue'}}>
        <Ionicons style={{top: 20, bottom: 10, left: Dimensions.get('screen').width / 3.5}} name="fitness" size={36} color="white"/>
        <Text style={{color: 'white',top: 65, left: Dimensions.get('screen').width / 18, position: 'absolute'}}>Temukan Dokter Anda Sekarang!</Text>
        <Pressable android_ripple={{ color: 'lightgrey', borderless: false }} 
        onPress={() => navigation.navigate('SearchScreen')} style={styles.search}>
          <Text style={{color: 'grey', left: 10, top: 4}}>Cari Dokter</Text>
          <Ionicons style={{alignSelf: 'center', alignSelf: 'flex-end', right: 10, top: 6, position: 'absolute'}} name="search" size={16} color="grey"/>
        </Pressable>
        <Image style={{width: 180, height: 140, alignSelf: 'flex-end', position: 'absolute'}} source={require('../../assets/banner_doctor.png')} />
      </View>
      <View style={styles.container}>
        <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
        onPress={() => navigation.navigate('Spesialis', { itemId: 14, otherParam: 'Dokter Umum' })} style={styles.card}>
          <View style={styles.cardView}>
            <ImageBackground style={styles.img} source={umum}/>
            <Text style={styles.textMenu}>Dokter Umum</Text>
          </View>
        </Pressable>
        <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
        onPress={() => navigation.navigate('Spesialis', { itemId: 1, otherParam: 'Spesialis Mata' })} style={styles.card}>
          <View style={styles.cardView}>
            <ImageBackground style={styles.img} source={mata}/>
            <Text style={styles.textMenu}>Spesialis Mata</Text>
          </View>
        </Pressable>
        <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
        onPress={() => navigation.navigate('Spesialis', { itemId: 11, otherParam: 'Spesialis Kulit & Kelamin' })} style={styles.card}>
        <View style={styles.cardView}>
          <ImageBackground style={styles.img} source={kulit}/>
          <Text style={styles.textMenu}>Kulit & Kelamin</Text>
        </View>
        </Pressable>
        <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
        onPress={() => navigation.navigate('Spesialis', { itemId: 8, otherParam: 'Spesialis Saraf' })} style={styles.card}>
        <View style={styles.cardView}>
          <ImageBackground style={styles.img} source={saraf}/>
          <Text style={styles.textMenu}>Spesialis Saraf</Text>
        </View>
        </Pressable>
        <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
        onPress={() => navigation.navigate('Spesialis', { itemId: 7, otherParam: 'Spesialis Penyakit Dalam' })} style={styles.card}>
          <View style={styles.cardView}>
            <ImageBackground style={styles.img} source={dalam}/>
            <Text style={styles.textMenu}>Penyakit Dalam</Text>
          </View>
        </Pressable>
        <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
        onPress={() => navigation.navigate('Spesialis', { itemId: 6, otherParam: 'Spesialis Anak' })} style={styles.card}>
          <View style={styles.cardView}>
            <ImageBackground style={styles.img} source={anak}/>
            <Text style={styles.textMenu}>Spesialis Anak</Text>
          </View>
        </Pressable>
        <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
        onPress={() => navigation.navigate('Spesialis', { itemId: 10, otherParam: 'Spesialis Bedah' })} style={styles.card}>
        <View style={styles.cardView}>
          <ImageBackground style={styles.img} source={bedah}/>
          <Text style={styles.textMenu}>Spesialis Bedah</Text>
        </View>
        </Pressable>
        <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
        onPress={() => navigation.navigate('Spesialis', { itemId: 9, otherParam: 'Spesialis Kandungan' })} style={styles.card}>
        <View style={styles.cardView}>
          <ImageBackground style={styles.img} source={kandungan}/>
          <Text style={styles.textMenu}>Kandungan</Text>
        </View>
        </Pressable>
        <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
        onPress={() => navigation.navigate('Spesialis', { itemId: 13, otherParam: 'Dokter Gigi' })} style={styles.card}>
        <View style={styles.cardView}>
          <ImageBackground style={styles.img} source={gigi}/>
          <Text style={styles.textMenu}>Dokter Gigi</Text>
        </View>
        </Pressable>
        <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
        onPress={() => navigation.navigate('Spesialis', { itemId: 12, otherParam: 'Spesialis THT' })} style={styles.card}>
        <View style={styles.cardView}>
          <ImageBackground style={styles.img} source={tht}/>
          <Text style={styles.textMenu}>Spesialis THT</Text>
        </View>
        </Pressable>
        <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
        onPress={() => navigation.navigate('Spesialis', { itemId: 2, otherParam: 'Paru-Paru' })} style={styles.card}>
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
      <Modal hardwareAccelerated statusBarTranslucent={true} animationType="slide" transparent={true} 
      visible={visible} backdropStyle={styles.backdrop} onRequestClose={() => { setVisible(false) }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Explore Dokterbee</Text>
            <TouchableOpacity style={{elevation: 2}} onPress={() => {setVisible(false)} }>
              <Text style={{fontWeight: "bold", marginLeft: Dimensions.get('screen').width / 2.3 }}>
                <Ionicons style={styles.lainnya} name="close-circle" size={23} />
              </Text>
            </TouchableOpacity>
            <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
            onPress={() => navigation.navigate('Spesialis', { itemId: 3, otherParam: 'Spesialis Jantung' }) & setVisible(false)} style={styles.card}>
              <View style={styles.cardView}>
                <ImageBackground style={styles.img} source={jantung}/>
                <Text style={styles.textMenu}>Jantung</Text>
              </View>
            </Pressable>
            <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
            onPress={() => navigation.navigate('Spesialis', { itemId: 4, otherParam: 'Spesialis Lambung' }) & setVisible(false)} style={styles.card}>
              <View style={styles.cardView}>
                <ImageBackground style={styles.img} source={lambung}/>
                <Text style={styles.textMenu}>Lambung</Text>
              </View>
            </Pressable>
            <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
            onPress={() => navigation.navigate('Spesialis', { itemId: 15, otherParam: 'Spesialis Bedah Plastik' }) & setVisible(false)} style={styles.card}>
            <View style={styles.cardView}>
              <ImageBackground style={styles.img} source={bdplas}/>
              <Text style={styles.textMenu}>Bedah Plastik</Text>
            </View>
            </Pressable>
            <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
            onPress={() => navigation.navigate('Spesialis', { itemId: 16, otherParam: 'Spesialis Bedah Onkologi' }) & setVisible(false)} style={styles.card}>
            <View style={styles.cardView}>
              <ImageBackground style={styles.img} source={onko}/>
              <Text style={styles.textMenu}>Bedah Onkologi</Text>
            </View>
            </Pressable>
            <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
            onPress={() => navigation.navigate('Spesialis', { itemId: 17, otherParam: 'Rehab Medik' }) & setVisible(false)} style={styles.card}>
              <View style={styles.cardView}>
                <ImageBackground style={styles.img} source={rehab}/>
                <Text style={styles.textMenu}>Rehab Medik</Text>
              </View>
            </Pressable>
            <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
            onPress={() => navigation.navigate('Spesialis', { itemId: 18, otherParam: 'Patologi Klinik' }) & setVisible(false)} style={styles.card}>
              <View style={styles.cardView}>
                <ImageBackground style={styles.img} source={pato}/>
                <Text style={styles.textMenu}>Patologi Klinik</Text>
              </View>
            </Pressable>
            <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} 
            onPress={() => navigation.navigate('Spesialis', { itemId: 19, otherParam: 'Radiologi' }) & setVisible(false)} style={styles.card}>
            <View style={styles.cardView}>
              <ImageBackground style={styles.img} source={radio}/>
              <Text style={styles.textMenu}>Radiologi</Text>
            </View>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal hardwareAccelerated transparent={true} visible={isAnimating}>
        <ActivityIndicator style={{flex: 1, marginTop: Dimensions.get('screen').height / 2, alignSelf: 'center'}} size="large" animating={isAnimating} color="skyblue"/>
      </Modal>
      {
        isLoading &&
        <Pressable android_ripple={{ color: 'lightgrey', borderless: false, }} 
        onPress={() => navigation.navigate('WebScreen')} style={styles.anotherCard}>
          <View style={styles.headerContainer}>
            <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 5, fontSize: 18}}>COVID-19</Text>
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
            <Text style={{color: 'white', marginLeft: 5, fontSize: 11}}>Update Terakhir : {moment(date).startOf('hour').fromNow()}</Text>
          </View>
        </Pressable>
      }
    </ScrollView>
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
    marginTop: Dimensions.get('screen').height / 2,
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
  search: {
    backgroundColor:'white', 
    width: 225, 
    height: 30, 
    position: 'absolute', 
    borderRadius: 5, 
    top: 95, 
    left: Dimensions.get('screen').width / 18,
  }
});

export default HomeScreen;