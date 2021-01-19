import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Dimensions, ActivityIndicator, Pressable, Text, Modal } from 'react-native';
import axios from "axios";
  
const Covid19 = () => {

  const [data, setData]=useState({
    confirmed:'',
    recovered:'',
    deaths:'',
    country:'',
    updated:''
  })
  const [daftarCovid, setDaftarCovid] =  useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isAnimating, setisAnimating] = useState(true);

  useEffect( () => {
    if (daftarCovid === null){
      axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=Indonesia`)
      .then(res => {
        let cov = res.data.All;
        setData({confirmed: cov.confirmed, recovered: cov.recovered, deaths: cov.deaths, country: cov.country, updated: cov.updated});
        setDaftarCovid(res.data.data);
        setisLoading(true);
        setisAnimating(false);
      })
    }
  }, [daftarCovid])

  const date = new Date(data.updated);

  return (
    <>
    <Modal hardwareAccelerated transparent={true} visible={isAnimating}>
      <ActivityIndicator style={{flex: 1, marginTop: Dimensions.get('screen').width / 4, alignSelf: 'center'}} size="large" animating={isAnimating} color="skyblue"/>
    </Modal>
    {
      isLoading &&
      <Pressable android_ripple={{ color: 'lightgrey', borderless: false, }} style={styles.anotherCard}>
        <View style={styles.headerContainer}>
          <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 5, fontSize: 18}}>Covid-19</Text>
          <Text style={{color: 'white', marginLeft: 5, fontSize: 12}}>{data.country}</Text>
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
          <Text style={{marginRight: 35, color: 'darkorange'}}>Positif</Text>
          <Text style={{marginRight: 20, color: 'darkgreen'}}>Sembuh</Text>
          <Text style={{color: 'crimson'}}>Meninggal</Text>
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginBottom: 10}}>
          <Text style={styles.info}>{parseFloat(data.confirmed).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
          <Text style={styles.info}>{parseFloat(data.recovered).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
          <Text style={styles.info}>{parseFloat(data.deaths).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={{color: 'white', marginLeft: 5, fontSize: 12}}>Updated at : {date.toString()}</Text>
        </View>
      </Pressable>
    }
    </>
  );
};
  
const styles = StyleSheet.create({
  anotherCard: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 25,
    width: Dimensions.get('screen').width - 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  info: {
    marginRight: 25,
  },
  headerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'skyblue', 
    padding: 12, 
    borderBottomLeftRadius: 0, 
    borderBottomRightRadius: 0, 
    borderTopLeftRadius: 5, 
    borderTopRightRadius: 5
  },
  bottomContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'skyblue', 
    padding: 12, 
    borderBottomLeftRadius: 5, 
    borderBottomRightRadius: 5, 
    borderTopLeftRadius: 0, 
    borderTopRightRadius: 0
  },
});

export default Covid19;