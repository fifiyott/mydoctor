import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ILLogo } from '../../assets';

const Splash = ({navigation}) => {
  // useEffect adalah suatu hooks yang dipanggil ketika komponen ini selesai dimunculkan
  useEffect(() => {
    setTimeout(()=>{
      navigation.replace('GetStarted');
    }, 3000 ) /* 3000 itu mksdnya 3 detik */
  }, [navigation])

  // replace membuat halaman tidak bisa kembali, navigate membuat halaman bisa kembali ke halaman sebelumnya
  return (
    <View style={styles.page}>
      <ILLogo/>
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
    page: {
        backgroundColor:'white', flex:1, alignItems:'center', justifyContent: 'center'
    },
    title:{
        fontSize:20, fontWeight:'600', color:'#112340', marginTop:20, fontFamily: 'APRO_Medium'
    }
});

