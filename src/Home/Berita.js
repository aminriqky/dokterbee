import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Text, Pressable, Image, ImageBackground } from 'react-native';
import axios from "axios";

const Berita = () => {

    const [daftarBerita, setDaftarBerita] = useState(null);

    useEffect( () => {
        if (daftarBerita === null){
          axios.get(`https://dokterbee.sashi.id/api/get_news`)
          .then(res => {
            const berita = res.data;
            setDaftarBerita(berita);
          })
        }
      }, [daftarBerita])
    
    return (
    <>
    <Text style={{fontWeight: 'bold',marginTop: 20, marginLeft: 20, marginBottom: 10, fontSize: 16}}>Tips & Trik Kesehatan</Text>
    {
        daftarBerita !== null && daftarBerita.map((item, index)=>{
        const image = { uri: `https://dokterbee.sashi.id/storage/${item.thumbnail}` };
        return(
            <>
            <View style={styles.tipsContainer}>
              <Pressable android_ripple={{ color: 'lightgrey', borderless: false }} style={styles.anotherCard}>
                <View>
                  <Image key={index} style={{width: Dimensions.get('screen').width - 20, height: 130}} source={image} />
                  <Text key={index} style={{marginTop: 20, marginLeft: 20, marginRight: 20, fontWeight: 'bold'}}>{item.judul_berita}</Text>
                  <Text key={index} style={{marginTop: 5, marginLeft: 20, marginRight: 20, marginBottom: 20}}>{item.detail.substring(0, 89)}...</Text>
                </View>
              </Pressable>
            </View>
            </>
            )
        })
    }
    </>
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
  
  export default Berita;