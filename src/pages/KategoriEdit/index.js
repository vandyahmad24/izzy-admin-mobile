import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {ButtonCustome, HeaderCustome, InputText, Jarak} from '../../components';
import {useFrom} from '../../config';
import {API_HOST, showError, showSuccess, Warna} from '../../utils';

const StokKategori = ({navigation, route}) => {
  const {id, namaKategori} = route.params;
  const dispatch = useDispatch();
  const [nama, setNama] = useState(namaKategori);

  const onSubmit = () => {
    dispatch({type: 'SET_LOADING', value: true});
    axios
      .put(`${API_HOST.url}/kategori/${id}`, {
        nama: nama,
      })
      // const response = axios.post(url,data,});

      .then(res => {
        // let user = res.data.data.user;
        console.log(res);
        // setForm('reset');
        dispatch({type: 'SET_LOADING', value: false});
        // showSuccess(`Berhasil membuat ${form.nama}`);
        // storeData('user_token', user.token_api);

        navigation.replace('ManajemenStok');
      })
      .catch(err => {
        console.log(err.response);
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.response.data.data.message);
      });
  };

  const onDelete = () => {
    dispatch({type: 'SET_LOADING', value: true});
    axios
      .delete(`${API_HOST.url}/kategori/${id}`)
      // const response = axios.post(url,data,});

      .then(res => {
        // let user = res.data.data.user;
        // console.log(res);
        // setForm('reset');
        dispatch({type: 'SET_LOADING', value: false});
        showSuccess('Kategori Berhasil dihapus');
        // storeData('user_token', user.token_api);

        navigation.replace('ManajemenStok');
      })
      .catch(err => {
        console.log(err.response);
        // dispatch({type: 'SET_LOADING', value: false});
        showError(err.response.data.data.message);
      });
  };
  //   let pesan = `Apakah anda yakin menghapus kategori ${nama} ?`;

  const fungsiHapus = () =>
    Alert.alert('Hapus Kategori', namaKategori, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: onDelete},
    ]);

  const sub = `Kategori: ${namaKategori}`;

  return (
    <View style={styles.page}>
      <HeaderCustome
        title="Edit Kategori"
        subTitle={sub}
        onPress={() => navigation.goBack()}
        onBack={() => {}}
      />
      <View style={styles.pageContainer}>
        <InputText
          label="Nama Kategori"
          value={nama}
          onChangeText={value => setNama(value)}
        />
        <Jarak height={24} />
        <ButtonCustome text="Simpan" color={Warna.primary} onPress={onSubmit} />
        <Jarak height={24} />
        <ButtonCustome
          text="Batal"
          color={Warna.gray}
          onPress={() => navigation.goBack()}
        />
        <Jarak height={24} />
        <ButtonCustome text="Hapus" color={Warna.red} onPress={fungsiHapus} />
      </View>
    </View>
  );
};

export default StokKategori;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Warna.white},
  pageContainer: {backgroundColor: Warna.white, flex: 1, padding: RFValue(30)},
});
