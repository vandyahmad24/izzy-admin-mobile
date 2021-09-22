import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InputText, HeaderCustome, ButtonCustome, Jarak} from '../../components';
import {Warna} from '../../utils';
// import normalize from 'react-native-normalize';
import {RFValue} from 'react-native-responsive-fontsize';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderCustome title="Masuk" />
      <View style={styles.container}>
        <InputText label="Username" placeholder="Masukan Username Anda" />
        <Jarak height={16} />
        <InputText label="Password" placeholder="Masukan Password Anda" />
        <Jarak height={24} />
        <ButtonCustome
          text="Masuk"
          onPress={() => navigation.navigate('Home')}
        />
        <Jarak height={12} />
        <ButtonCustome text="Batal" color={Warna.gray} />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Warna.white},
  container: {
    backgroundColor: Warna.white,
    paddingHorizontal: RFValue(24),
    paddingVertical: RFValue(26),
    marginTop: RFValue(24),
    flex: 1,
  },
});
