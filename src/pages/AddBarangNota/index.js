import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  InputText2,
  HeaderCustome,
  ButtonCustome,
  Jarak,
} from '../../components';
import {Warna} from '../../utils';
// import normalize from 'react-native-normalize';
import {RFValue} from 'react-native-responsive-fontsize';

const AddBarangNota = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderCustome
        title="Notaa"
        subTitle="Tambah Barang"
        onBack={() => {}}
        onPress={() => navigation.navigate('Nota')}
      />
      <View style={styles.container}>
        <ScrollView>
          <InputText2 label="Qty" />
          <Jarak height={5} />
          <InputText2 label="Nama Barang" />
          <Jarak height={5} />
          <InputText2 label="Harga" />
          <Jarak height={5} />
          <InputText2 label="Total" readOnly={false} warna={Warna.gray2} />
          <Jarak height={10} />
          <ButtonCustome
            text="Tambah"
            onPress={() => navigation.navigate('Home')}
          />
          <Jarak height={5} />
          <ButtonCustome
            text="Batal"
            color={Warna.gray}
            onPress={() => navigation.navigate('Nota')}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default AddBarangNota;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Warna.white},
  container: {
    backgroundColor: Warna.white,
    paddingHorizontal: RFValue(24),
    paddingVertical: RFValue(10),
    marginTop: RFValue(10),
    flex: 1,
  },
});
