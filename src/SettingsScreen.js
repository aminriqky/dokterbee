import React from 'react';
import { Text, View, StyleSheet, Pressable, Dimensions } from 'react-native';

function SettingsScreen() {
    return (
      <View style={styles.tipsContainer}>
      <Pressable android_ripple={{ color: 'lightgrey', borderless: false }} style={styles.anotherCard}>
        <View>
          <Text style={styles.press}>Kebijakan Data</Text>
        </View>
      </Pressable>
      <Pressable android_ripple={{ color: 'lightgrey', borderless: false }} style={styles.anotherCard}>
        <View>
          <Text style={styles.press}>Ketentuan Penggunaan</Text>
        </View>
      </Pressable>
      <Pressable android_ripple={{ color: 'lightgrey', borderless: false }} style={styles.anotherCard}>
        <View>
          <Text style={styles.press}>Kredit</Text>
        </View>
      </Pressable>
    </View>
    );
  }

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
    press: {
      marginTop: 15, 
      marginLeft: 10, 
      marginBottom: 15,
    },
  });

export default SettingsScreen;