import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Text, Pressable, ScrollView } from 'react-native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
  } catch(e) {
    // error reading value
  }
}


const Dokter = () => {

    const [daftarDokter, setDaftarDokter] = useState(null);
    const [data, setData] = useState({
        spesialis_id: '',
    });
    const [daftarSpesialis, setDaftarSpesialis] = useState(null);
    const [dataSp, setDataSp] = useState({
        id : '',
        spesialis: '',
    });

    useEffect( () => {
        if (daftarDokter === null){
          axios.get(`https://dokterbee.sashi.id/api/get_doctor_all`)
          .then(res => {
            const dokter = res.data;
            setDaftarDokter(dokter)
            setData({spesialis_id: dokter.spesialis_id})
          })
        } if (daftarSpesialis === null){
          axios.get(`https://dokterbee.sashi.id/api/get_spesialis_all`)
          .then(res => {
            const doktersp = res.data;
            setDaftarSpesialis(doktersp)
            setDataSp({id: doktersp.id, spesialis: doktersp.spesialis})
          })
        }
    })

    return (
    <ScrollView>
    <Text key={data.id} style={{fontWeight: 'bold',marginTop: 20, marginLeft: 20, marginBottom: 10, color: 'black'}}>Dokter Umum</Text>
    {
        daftarDokter !== null && daftarDokter.map((item, index)=>{
        return(
            <>
            <View key={index} style={styles.tipsContainer}>
                <Pressable android_ripple={{ color: 'lightgrey', borderless: false }} style={styles.anotherCard}>
                <View>
                    <Text style={{marginTop: 20, marginLeft: 20, marginRight: 20, fontWeight: 'bold'}}>{item.nama} {item.spesialis_id}</Text>
                    <Text style={{marginTop: 5, marginLeft: 20, marginRight: 20, marginBottom: 20}}>{item.pengalaman}</Text>
                </View>
                </Pressable>
            </View>
            </>
            )
        })
    }
    </ScrollView>
    );
  };
    
  const styles = StyleSheet.create({
    anotherCard: {
      margin: 10,
      width: Dimensions.get('screen').width - 20,
      backgroundColor: 'white',
      borderRadius: 5,
    },
    centeredCard: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 10, 
        marginBottom: 10
    },
    tipsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default Dokter;