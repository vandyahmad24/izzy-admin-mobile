import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ButtonCustome, HeaderCustome, InputText, Jarak} from '../../components';
import {Warna} from '../../utils';

const AddStok = ({navigation, route}) => {
  const {title} = route.params;
  return (
    <View style={styles.page}>
      <HeaderCustome
        title={title}
        subTitle="19 September 2021 08.53 "
        onPress={() => navigation.goBack()}
        onBack={() => {}}
      />
      <View style={styles.pageContainer}>
        <InputText label="Nama Barang" />
        <Jarak height={24} />
        <InputText label="Jumlah Ukuran 27-32" />
        <Jarak height={24} />
        <InputText label="Jumlah Ukuran 33-38" />
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

export default AddStok;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Warna.white},
  pageContainer: {backgroundColor: Warna.white, flex: 1, padding: RFValue(30)},
});
