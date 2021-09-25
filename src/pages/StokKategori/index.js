import axios from 'axios';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {ButtonCustome, HeaderCustome, InputText, Jarak} from '../../components';
import {useFrom} from '../../config';
import {API_HOST, showError, showSuccess, Warna} from '../../utils';

const StokKategori = ({navigation}) => {
  const [form, setForm] = useFrom({nama: ''});
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch({type: 'SET_LOADING', value: true});
    axios
      .post(`${API_HOST.url}/kategori`, form)
      // const response = axios.post(url,data,});

      .then(res => {
        // let user = res.data.data.user;
        // console.log(res);
        setForm('reset');
        dispatch({type: 'SET_LOADING', value: false});
        showSuccess(`Berhasil membuat ${form.nama}`);
        // storeData('user_token', user.token_api);

        navigation.replace('ManajemenStok');
      })
      .catch(err => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.response.data.data.message);
      });
  };

  return (
    <View style={styles.page}>
      <HeaderCustome
        title="Tambah Kategori"
        subTitle="Manajemen Stok Jeans"
        onPress={() => navigation.goBack()}
        onBack={() => {}}
      />
      <View style={styles.pageContainer}>
        <InputText
          label="Nama Kategori"
          value={form.nama}
          onChangeText={value => setForm('nama', value)}
        />
        <Jarak height={24} />
        <ButtonCustome text="Simpan" color={Warna.primary} onPress={onSubmit} />
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
