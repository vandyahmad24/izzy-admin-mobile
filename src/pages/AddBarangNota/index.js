import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  InputText2,
  HeaderCustome,
  ButtonCustome,
  Jarak,
} from '../../components';
import {API_HOST, showError, showSuccess, Warna} from '../../utils';
// import normalize from 'react-native-normalize';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import axios from 'axios';

const AddBarangNota = ({navigation}) => {
  const [qty, setQty] = useState('0');
  const [namaBarang, setNamaBarang] = useState('');
  const [harga, setHarga] = useState('0');
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch({type: 'SET_LOADING', value: true});
    axios
      .post(`${API_HOST.url}/nota-detail`, {
        nama: namaBarang,
        harga: harga,
        qty: qty,
      })
      .then(res => {
        console.log(res.data);
        // let user = res.data.data.user;
        // setForm('reset');
        dispatch({type: 'SET_LOADING', value: false});
        showSuccess(`Anda berhasil menambahkan stok ${namaBarang}`);
        navigation.replace('Nota');
      })
      .catch(err => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.response.data.data.message);
      });
  };

  return (
    <View style={styles.page}>
      <HeaderCustome
        title="Nota"
        subTitle="Tambah Barang"
        onBack={() => {}}
        onPress={() => navigation.navigate('Nota')}
      />
      <View style={styles.container}>
        <ScrollView>
          <InputText2
            label="Qty"
            value={qty}
            onChangeText={value => setQty(value)}
            keyboardType="numeric"
          />
          <Jarak height={5} />
          <InputText2
            label="Nama Barang"
            value={namaBarang}
            onChangeText={value => setNamaBarang(value)}
          />
          <Jarak height={5} />
          <InputText2
            label="Harga"
            value={harga}
            onChangeText={value => setHarga(value)}
            keyboardType="numeric"
          />
          <Jarak height={10} />
          <ButtonCustome
            text="Tambah"
            onPress={onSubmit}
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
