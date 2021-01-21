import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Text, Pressable, ScrollView, ActivityIndicator, Image, Modal } from 'react-native';
import axios from "axios";

const Spesialis = ({ route }) => {

    const [daftarDokter, setDaftarDokter] = useState(null);
    const [isAnimating, setisAnimating] = useState(true);
    const { itemId, otherParam } = route.params;

    useEffect( () => {
        if (daftarDokter === null){
          axios.get(`https://dokterbee.sashi.id/api/get_doctor_all`)
          .then(res => {
            const dokter = res.data;
            setDaftarDokter(dokter);
            setisAnimating(false);
          })
        }
    })

    return (
    <ScrollView>
    <Text style={{fontWeight: 'bold',marginTop: 20, marginLeft: 20, marginBottom: 10, color: 'black'}}>{otherParam}</Text>
    <Modal hardwareAccelerated transparent={true} visible={isAnimating}>
      <ActivityIndicator style={{flex: 1, marginTop: Dimensions.get('screen').width / 4, alignSelf: 'center'}} size="large" animating={isAnimating} color="skyblue"/>
    </Modal>
    {
        daftarDokter !== null && daftarDokter.map((item, index)=>{
        const image = { uri: `https://dokterbee.sashi.id/storage/${item.foto}` };
        return(
          item.spesialis_id == itemId && (
            <>
            <View key={index} style={styles.tipsContainer}>
              <Pressable android_ripple={{ color: 'lightgrey', borderless: false }} style={styles.anotherCard}>
                <Image source={image} style={{borderRadius: 40, width: 70, height: 70, marginTop: 15, marginLeft: 20, marginRight: 20, backgroundColor: 'lightgrey'}}/>
                <View>
                  <Text style={{marginTop: 15, marginLeft: 10, fontWeight: 'bold'}}>{item.nama}</Text>
                  <Text style={{marginTop: 5, marginLeft: 10}}>{otherParam}</Text>
                  <Text style={{marginLeft: 10, marginBottom: 20}}>{item.pengalaman}</Text>
                </View>
              </Pressable>
            </View>
            </>
          )
        )
        })
    }
    </ScrollView>
    );
  };
    
  const styles = StyleSheet.create({
    anotherCard: {
      margin: 5,
      width: Dimensions.get('screen').width - 20,
      backgroundColor: 'white',
      borderRadius: 10,
      flexDirection: 'row', 
      flexWrap: 'wrap',
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
  
  export default Spesialis;