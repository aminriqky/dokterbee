import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Text, Pressable, ScrollView, ActivityIndicator, Image, Modal } from 'react-native';
import axios from "axios";

const Spesialis = ({ route, navigation }) => {

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
    }, [daftarDokter])

    return (
    <ScrollView>
    <Text style={{fontWeight: 'bold',marginTop: 20, marginLeft: 20, marginBottom: 10, color: 'black'}}>{otherParam}</Text>
    {
      daftarDokter == null &&
      <ActivityIndicator size="large" animating={isAnimating} color="skyblue"
      style={{marginTop: Dimensions.get('screen').width / 2, alignSelf: 'center'}} />
    }
    {
      daftarDokter !== null && daftarDokter.map((item)=>{
      const image = { uri: `https://dokterbee.sashi.id/storage/${item.foto}` };
      if (item.spesialis_id == itemId) {
        return(
          <>
            <View key={item.id} style={styles.tipsContainer}>
              <Pressable android_ripple={{ color: 'lightgrey', borderless: false }} onPress={() => navigation.navigate('DetailScreen', 
              { idParam: item.id, nameParam: item.nama, otherParam: otherParam, photoParam: image, miscParam: item.pengalaman })} style={styles.anotherCard}>
                <Image source={image} style={{borderRadius: 40, width: 70, height: 70, marginTop: 15, marginLeft: 20, marginRight: 10, backgroundColor: 'lightgrey'}}/>
                <View>
                  <Text style={{marginTop: 15, marginLeft: 10, fontWeight: 'bold'}}>{item.nama.substring(0, 35)}</Text>
                  <Text style={{marginTop: 5, marginLeft: 10}}>{otherParam}</Text>
                  <Text style={{marginLeft: 10, marginBottom: 20}}>{item.keterangan}</Text>
                </View>
              </Pressable>
            </View>
          </>
        )
      }
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
    tipsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default Spesialis;