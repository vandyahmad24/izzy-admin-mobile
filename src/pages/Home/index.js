import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcNota, IcPanahKanan, IcStok} from '../../assets/Icon';
import {HeaderCustome} from '../../components';
import {Warna} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderCustome
        title="Homepage"
        onPress={() => navigation.goBack()}
        // onBack={() => {}}
      />
      {/* View Pertama */}
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('ManajemenStok')}>
          <View style={styles.containerMenu}>
            <IcStok width={250} height={150} />
            <Text style={styles.title}>Manajemen Stok</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Nota')}>
          <View style={styles.containerMenu}>
            <IcNota width={250} height={150} />
            <Text style={styles.title}>Nota</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Warna.white},
  container: {
    flex: 1,
  },
  containerMenu: {alignItems: 'center', padding: RFValue(45)},
  title: {fontSize: RFValue(30)},
});
