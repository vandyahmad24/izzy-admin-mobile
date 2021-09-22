import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ButtonCustome, HeaderCustome, InputText, Jarak} from '../../components';
import {Warna} from '../../utils';

const StokKategori = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderCustome
        title="Tambah Kategori"
        subTitle="Manajemen Stok Jeans"
        onPress={() => navigation.goBack()}
        onBack={() => {}}
      />
      <View style={styles.pageContainer}>
        <InputText label="Nama Kategori" placeholder="Masukan Username Anda" />
        <Jarak height={24} />
        <ButtonCustome text="Simpan" color={Warna.primary} />
        <Jarak height={24} />
        <ButtonCustome
          text="Batal"
          color={Warna.gray}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default StokKategori;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Warna.white},
  pageContainer: {backgroundColor: Warna.white, flex: 1, padding: RFValue(30)},
});
