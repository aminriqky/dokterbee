import React, { useState } from 'react';
import { Modal, ImageBackground, StyleSheet, View, Dimensions, ScrollView, SafeAreaView, TouchableOpacity, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Covid19 from './Covid19';
import Berita from './Berita';

import umum from '../../assets/umum.png';
import mata from '../../assets/mata.png';
import kulit from '../../assets/kulit.png';
import paru from '../../assets/paru.png';
import saraf from '../../assets/saraf.png';
import tht from '../../assets/tht.png';
import gigi from '../../assets/gigi.png';

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value)
  } catch (e) {
    // saving error
  }
}
  
const HomeScreen = ({ navigation }) => {

  const [visible, setVisible] = useState(false);

  const dokterUmum = JSON.stringify(14)

  return (
      <>
      <SafeAreaView>
          <ScrollView>
              <View style={styles.container}>
                <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} onPress={() => navigation.push('Dokter') && storeData(amin)} style={styles.card}>
                  <View style={styles.cardView}>
                    <ImageBackground style={styles.img} source={umum}/>
                    <Text style={styles.textMenu}>Dokter Umum</Text>
                  </View>
                </Pressable>
                <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} onPress={() => navigation.push('Dokter')} style={styles.card}>
                  <View style={styles.cardView}>
                    <ImageBackground style={styles.img} source={mata}/>
                    <Text style={styles.textMenu}>Spesialis Mata</Text>
                  </View>
                </Pressable>
                <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} onPress={() => navigation.push('Dokter')} style={styles.card}>
                <View style={styles.cardView}>
                  <ImageBackground style={styles.img} source={kulit}/>
                  <Text style={styles.textMenu}>Spesialis Kulit</Text>
                </View>
                </Pressable>
                <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} onPress={() => navigation.push('Dokter')} style={styles.card}>
                <View style={styles.cardView}>
                  <ImageBackground style={styles.img} source={saraf}/>
                  <Text style={styles.textMenu}>Spesialis Saraf</Text>
                </View>
                </Pressable>
                <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} onPress={() => navigation.push('Dokter')} style={styles.card}>
                <View style={styles.cardView}>
                  <ImageBackground style={styles.img} source={gigi}/>
                  <Text style={styles.textMenu}>Dokter Gigi</Text>
                </View>
                </Pressable>
                <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} onPress={() => navigation.push('Dokter')} style={styles.card}>
                <View style={styles.cardView}>
                  <ImageBackground style={styles.img} source={tht}/>
                  <Text style={styles.textMenu}>Spesialis THT</Text>
                </View>
                </Pressable>
                <Pressable android_ripple={{ color: 'lightgrey', borderless: true, }} onPress={() => navigation.push('Dokter')} style={styles.card}>
                <View style={styles.cardView} onPress={() => navigation.navigate('Dokter')}>
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
            <Covid19/>
            <Berita/>
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
    width: Dimensions.get('screen').width / 3.35,
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
});

export default HomeScreen;