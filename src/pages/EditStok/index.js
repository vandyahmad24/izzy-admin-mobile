import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, ScrollView, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {ButtonCustome, HeaderCustome, InputText, Jarak} from '../../components';
import useForm from '../../config/useForm';
import {API_HOST, showError, showSuccess, Warna} from '../../utils';

const EditStok = ({navigation, route}) => {
  const {namaKategori, kategori_id, stok_id} = route.params;
  const dispatch = useDispatch();
  const [nama, setNama] = useState('');
  const [qty2, setQty2] = useState('');
  const [qty3, setQty3] = useState('');

  useEffect(() => {
    GetStok();
  }, []);

  const GetStok = () => {
    dispatch({type: 'SET_LOADING', value: true});
    axios
      .get(`${API_HOST.url}/stok/edit/${stok_id}`)
      .then(res => {
        let response = res.data.data.stok;
        setNama(response.nama);
        setQty2(response.qty_22);
        setQty3(response.qty_22);
        // setForm('nama', response.nama);
        // setForm('qty_22', response.qty_22);

        dispatch({type: 'SET_LOADING', value: false});
      })
      .catch(err => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.response.data.data.message);
      });
  };

  const onSubmit = () => {
    dispatch({type: 'SET_LOADING', value: true});
    axios
      .put(`${API_HOST.url}/stok/${stok_id}`, {
        kategori_id: kategori_id,
        nama: nama,
        qty_22: qty2,
        qty_33: qty3,
      })
      .then(res => {
        // setForm('reset');
        dispatch({type: 'SET_LOADING', value: false});
        showSuccess(`Anda berhasil menambahkan stok ${nama}`);
        navigation.replace('ListStok', {
          title: namaKategori,
          id: kategori_id,
        });
      })
      .catch(err => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.response.data.data.message);
      });
  };
  let sub = `Kategori: ${namaKategori}`;

  const onDelete = () => {
    dispatch({type: 'SET_LOADING', value: true});
    axios
      .delete(`${API_HOST.url}/stok/${stok_id}`)
      // const response = axios.post(url,data,});

      .then(res => {
        // let user = res.data.data.user;
        // console.log(res);
        // setForm('reset');
        dispatch({type: 'SET_LOADING', value: false});
        showSuccess('Stok Berhasil dihapus');
        // storeData('user_token', user.token_api);

        navigation.replace('ListStok', {
          title: namaKategori,
          id: kategori_id,
        });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.response.data.data.message);
      });
  };
  //   let pesan = `Apakah anda yakin menghapus kategori ${nama} ?`;

  const fungsiHapus = () =>
    Alert.alert('Yakin menghapus?', nama, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: onDelete},
    ]);

  return (
    <View style={styles.page}>
      <HeaderCustome
        title="Edit Stok kategori"
        subTitle={sub}
        onPress={() =>
          navigation.replace('ListStok', {
            title: namaKategori,
            id: kategori_id,
          })
        }
        onBack={() => {}}
      />
      <View style={styles.pageContainer}>
        <ScrollView>
          <InputText
            label="Nama Barang"
            value={nama}
            onChangeText={value => setNama(value)}
          />
          <Jarak height={24} />
          <InputText
            label="Jumlah Ukuran 27-32"
            value={qty2}
            onChangeText={value => setQty2(value)}
            keyboardType="numeric"
          />
          <Jarak height={24} />
          <InputText
            label="Jumlah Ukuran 33-38"
            value={qty3}
            onChangeText={value => setQty3(value)}
            keyboardType="numeric"
          />
          <Jarak height={24} />
          <ButtonCustome
            text="Simpan"
            color={Warna.primary}
            onPress={onSubmit}
          />
          <Jarak height={24} />
          <ButtonCustome
            text="Batal"
            color={Warna.gray}
            onPress={() =>
              navigation.replace('ListStok', {
                title: namaKategori,
                id: kategori_id,
              })
            }
          />
          <Jarak height={24} />
          <ButtonCustome text="Hapus" color={Warna.red} onPress={fungsiHapus} />
        </ScrollView>
      </View>
    </View>
  );
};

export default EditStok;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Warna.white},
  pageContainer: {backgroundColor: Warna.white, flex: 1, padding: RFValue(30)},
});
