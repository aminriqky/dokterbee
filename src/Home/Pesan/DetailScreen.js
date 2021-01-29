import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import axios from "axios";

const DetailScreen = ({ route }) => {

    const [dataDokter, setDataDokter] = useState(null);
    const { idParam, nameParam, otherParam, photoParam, miscParam } = route.params;

    useEffect( () => {
      if (dataDokter === null){
        axios.get(`https://dokterbee.sashi.id/api/get_jadwal_all`)
        .then(res => {
          const dokter = res.data;
          setDataDokter(dokter);
        })
      }
    }, [dataDokter])

    return (
    <ScrollView>
    <View style={styles.rapi}>
      <Image source={photoParam} style={{borderRadius: 40, width: 70, height: 70, marginTop: 20, marginLeft: 20, marginRight: 20, backgroundColor: 'lightgrey'}}/>
      <View style={{marginTop: 15, marginRight: 20}}>
          <Text style={{marginTop: 15, fontWeight: 'bold'}}>{nameParam}</Text>
          <Text style={{marginTop: 5}}>{otherParam}</Text>
      </View>
    </View>
    <View style={{marginTop: 20, marginLeft: 20, marginRight: 20}}>
      <Text style={{fontWeight: 'bold'}}>Profil Dokter</Text>
      <Text>{miscParam}</Text>
      <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: 5}}>Lokasi & Jadwal Praktik</Text>
    </View>
    <View style={{marginTop: 5, marginLeft: 20, marginRight: 20, borderRadius: 10}}>
      <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row', backgroundColor: 'skyblue'}}>
        <Text style={styles.tableHeader}>Hari</Text>
        <Text style={styles.tableHeader}>Jam</Text>
        <Text style={styles.tableHeader}>Rumah Sakit</Text>
        <Text style={styles.tableHeader}>Biaya</Text>
      </View>
    {
      dataDokter !== null && dataDokter.map((item, index)=>{
      return(
        item.dokter_id == idParam && (
          <>
          <View key={index} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1, borderColor: 'lightgrey', backgroundColor: 'white' }}>
            <Text style={styles.table}>{item.agenda}</Text>
            <Text style={styles.table}>{item.jam}</Text>
            <Text style={styles.table}>{item.rumah_sakit_id}</Text>
            <Text style={styles.table}>{item.biaya}</Text>
          </View>
          </>
        )
      )
      })
    }
    </View>
    </ScrollView>
    );
  };
    
  const styles = StyleSheet.create({
    rapi: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    table: {
      flex: 1,
      alignSelf: 'stretch',
      margin: 10,
    },
    tableHeader: {
      flex: 1, 
      alignSelf: 'stretch', 
      fontWeight: 'bold', 
      margin: 10,
    }
  });
  
  export default DetailScreen;