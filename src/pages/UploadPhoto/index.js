import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Link} from '../../components';
import ILNullPhoto from '../../assets/illustration/photoNull.png';
import IconAddPhoto from '../../assets/icon/add_photo.svg';
import {colors} from '../../utils';

const UploadPhoto = ({}) => {
  return (
    <View style={styles.container}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={30}/>
          <Link title="Skip for this" align='cna' size='cna' />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 40, justifyContent: 'space-between', paddingBottom: 40
  },
  profile: {
    alignItems: 'center', justifyContent: 'center', flex: 1,
  },
  avatar: {
    width: 130,
    height: 130,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: 'APRO_Medium',
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    color: colors.text.primary,
    fontFamily: 'APRO_Regular',
    textAlign: 'center',
    color: colors.text.secondary,
  },
});
