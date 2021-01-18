import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Text, Pressable, ScrollView, ActivityIndicator } from 'react-native';
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
    <ActivityIndicator style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center'}} pointerEvents="none" size="large" animating={isAnimating} color="skyblue"/>
    {
        daftarDokter !== null && daftarDokter.map((item, index)=>{
        return(
          item.spesialis_id == itemId && (
            <>
            <View key={index} style={styles.tipsContainer}>
              <Pressable android_ripple={{ color: 'lightgrey', borderless: false }} style={styles.anotherCard}>
                <View>
                    <Text style={{marginTop: 20, marginLeft: 20, marginRight: 20, fontWeight: 'bold'}}>{item.nama}</Text>
                    <Text style={{marginTop: 5, marginLeft: 20, marginRight: 20}}>{otherParam}</Text>
                    <Text style={{marginLeft: 20, marginRight: 20, marginBottom: 20}}>{item.pengalaman}</Text>
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
  
  export default Spesialis;