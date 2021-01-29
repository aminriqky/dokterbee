import React,{ useState, useEffect } from 'react';
import { View, Text, TextInput, Dimensions, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import axios from 'axios';

  const Item = ({ nama, foto, keterangan }) => (
    <View style={styles.tipsContainer}>
      <Pressable android_ripple={{ color: 'lightgrey', borderless: false }} style={styles.anotherCard}>
        <Image source={{ uri: `https://dokterbee.sashi.id/storage/${foto}` }} 
        style={{borderRadius: 40, width: 50, height: 50, margin:10, backgroundColor: 'lightgrey'}}/>
        <View>
          <Text style={{marginTop: 15, marginLeft: 10}}>{nama.substring(0, 40)}</Text>
          <Text style={{marginLeft: 10, marginBottom: 10, color: 'grey'}}>{keterangan}</Text>
        </View>
      </Pressable>
    </View>
  );

function SearchScreen() {

    const [value, onChangeText] = useState('');
    const [daftarDokter, setDaftarDokter] = useState(null);

    useEffect( () => {
      if (daftarDokter === null){
        axios.get(`https://dokterbee.sashi.id/api/get_doctor_all`)
        .then(res => {
          const dokter = res.data;
          setDaftarDokter(dokter);
        })
      }
    }, [daftarDokter])

    const renderItem = ({ item }) => (
      <Item foto={item.foto} nama={item.nama} keterangan={item.keterangan}/>
    );

    return (
      <>
      <View style={{color: 'lightgrey', height: 80, backgroundColor: 'white', flexDirection: 'row', marginBottom: 5}}>
        <TextInput style={styles.textInputSearch} autoFocus
         value={value}/>
      </View>
      <FlatList
        data={daftarDokter}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </>
    );
  }

  const styles = StyleSheet.create({
    textInputSearch: {
      height: 40, 
      width: Dimensions.get('screen').width - 40, 
      borderColor: 'lightgrey', 
      borderWidth: 2, 
      borderRadius: 5, 
      alignContent: 'center', 
      top: 20, 
      left: 20,
      backgroundColor: 'skyblue',
      paddingHorizontal: 10,
    },
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
    }
  });

export default SearchScreen;