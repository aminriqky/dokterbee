import React,{useState, useEffect} from 'react';
import { Text, View, ScrollView, Pressable, Image, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';

function NewsScreen({ navigation }) {

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
      <ScrollView>
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
    );
  }

  const styles = StyleSheet.create({
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
  
  export default NewsScreen;