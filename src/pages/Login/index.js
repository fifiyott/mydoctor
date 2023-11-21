import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Link, Input, Gap} from '../../components';
import { ILLogo } from '../../assets';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" />
      <Gap height={35} />
      <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
      <Gap height={25} />
      <Link title="Create New Account?" size="cna" align="cna" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    padding: 40,
  },
  title: {
    fontFamily: 'APRO_Medium',
    fontSize: 20,
    color: '#112340',
    marginVertical: 40,
    maxWidth: 153,
    lineHeight: 24,
  },
});
