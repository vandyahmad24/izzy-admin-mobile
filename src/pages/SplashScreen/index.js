import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {LogoIzzy} from '../../assets/Icon';
import {getData} from '../../utils';
import {JenFonts} from '../../utils/JenFonts';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    let dataUser = null;
    getData('user_token').then(res => {
      dataUser = res;
      console.log('Data token ', dataUser);
    });
    setTimeout(() => {
      if (dataUser == null) {
        navigation.replace('SignIn');
      } else {
        navigation.replace('Home');
      }
    }, 2000);
    // tidak terus terender
  }, []);

  return (
    <View style={styles.body}>
      <LogoIzzy />
      <Text style={styles.title}>Izzy Apps Admin</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontFamily: JenFonts.primary[700],
  },
});

export default SplashScreen;
