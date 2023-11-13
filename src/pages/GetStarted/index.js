import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import ILLogo from '../../assets/illustration/logo.svg';
import {Button, Gap} from '../../components';
import ILBackground from '../../assets/illustration/get-started.jpg';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILBackground} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>

      {/* button dijadikan group */}
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        {/* <View style={{height: 16}}/> udh dipake componen sendiri di folder atoms*/}
        <Gap height={16} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 28,
    marginTop: 91,
    color: 'white',
    fontFamily: 'APRO_Medium',
  },
});
