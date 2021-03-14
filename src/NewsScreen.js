import React,{useState, useEffect} from 'react';
import { Text, View, FlatList, Pressable, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function Item ({ judul_berita, thumbnail, detail, created_at }) {

  const navigation = useNavigation();

  return(
  <View style={styles.tipsContainer}>
    <Pressable android_ripple={{ color: 'lightgrey', borderless: false }} onPress={() => navigation.navigate('BeritaScreen', 
    { otherParam: judul_berita, detailParam: detail, dateParam: created_at, thumbnailParam: thumbnail })} style={styles.otherCard}>
      <View>
        <Image style={{width: Dimensions.get('screen').width - 20, height: 130}} 
        source={{ uri: `https://dokterbee.sashi.id/storage/${thumbnail}` }} />
        <Text style={{marginTop: 20, marginLeft: 20, marginRight: 20, fontWeight: 'bold'}}>{judul_berita}</Text>
        <Text style={{marginTop: 5, marginLeft: 20, marginRight: 20, marginBottom: 20}}>{detail.substring(0, 89)}...</Text>
      </View>
    </Pressable>
  </View>
  )
}

function NewsScreen() {

  const [daftarBerita, setDaftarBerita] = useState(null);
  const [isAnimating, setisAnimating] = useState(true);

  useEffect( () => {
    if (daftarBerita === null){
      axios.get(`https://dokterbee.sashi.id/api/get_news`)
      .then(res => {
        const berita = res.data;
        setDaftarBerita(berita);
        setisAnimating(false);
      })
    }
  }, [daftarBerita])

  const renderItem = ({ item }) => (
    <Item judul_berita={item.judul_berita} thumbnail={item.thumbnail} detail={item.detail} created_at={item.created_at}/>
  );

  return (
    <>
    <Text style={{fontWeight: 'bold',marginTop: 20, marginLeft: 20, marginBottom: 10, fontSize: 16}}>Info Kesehatan</Text>
    {
      daftarBerita == null &&
      <ActivityIndicator size="large" animating={isAnimating} color="skyblue"
      style={{marginTop: Dimensions.get('screen').width / 2, alignSelf: 'center'}} />
    }
    <FlatList
      data={daftarBerita}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
    </>
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