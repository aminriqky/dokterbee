import React from 'react';
import { StyleSheet, View, Dimensions, Text, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

let dayjs = require('dayjs')

const BeritaScreen = ({ route }) => {

    const { otherParam, detailParam, dateParam, thumbnailParam } = route.params;

    const image = { uri: `https://dokterbee.sashi.id/storage/${thumbnailParam}` };
    
    return (
    <>
    <ScrollView>
      <Text style={{fontWeight: 'bold',marginTop: 35, marginLeft: 20, marginRight: 20, marginBottom: 10, fontSize: 20}}>{otherParam}</Text>
      <View style={styles.bgIconColor}>
        <Ionicons style={styles.icon} name="newspaper-outline" size={28} color="grey" />
        <Text style={{margin: 9}}>Dipublikasikan Pada {dayjs(dateParam).format('DD/MM/YYYY HH:mm WIB')}</Text>
      </View>
      <Image style={{ marginTop: 20, width: Dimensions.get('screen').width - 40,height: 200, alignSelf: 'center' }} resizeMode="contain" source={image}/>
      <Text style={styles.isi}>{detailParam}</Text>
    </ScrollView>
    </>
    );
  };
    
  const styles = StyleSheet.create({
    icon: {
      margin: 9,
    },
    bgIconColor: {
      marginLeft: 20,
      backgroundColor: 'white', 
      borderRadius: 40,
      flexDirection: 'column',
      flexWrap: 'wrap',
      height: 47,
      width: 47,
    },
    isi: {
      margin: 20,
      fontSize: 18,
    }
  });
  
  export default BeritaScreen;