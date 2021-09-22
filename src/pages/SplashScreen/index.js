import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {LogoIzzy} from '../../assets/Icon';
import { JenFonts } from '../../utils/JenFonts';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
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
