import axios from 'axios';
import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {ButtonCustome, HeaderCustome, InputText, Jarak} from '../../components';
import useForm from '../../config/useForm';
import {API_HOST, showError, showSuccess, storeData, Warna} from '../../utils';

const AddStok = ({navigation, route}) => {
  const {namaKategori, id} = route.params;
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    nama: '',
    qty_22: '0',
    qty_33: '0',
  });
  const onSubmit = () => {
    dispatch({type: 'SET_LOADING', value: true});
    axios
      .post(`${API_HOST.url}/stok`, {
        kategori_id: id,
        nama: form.nama,
        qty_22: form.qty_22,
        qty_33: form.qty_33,
      })
      // const response = axios.post(url,data,});

      .then(res => {
        // let user = res.data.data.user;
        setForm('reset');
        dispatch({type: 'SET_LOADING', value: false});
        showSuccess(`Anda berhasil menambahkan stok ${form.nama}`);
        navigation.replace('ListStok', {
          title: namaKategori,
          id: id,
        });
      })
      .catch(err => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.response.data.data.message);
      });
  };
  let sub = `Kategori: ${namaKategori}`;

  return (
    <View style={styles.page}>
      <HeaderCustome
        title="Tambah Stok kategori"
        subTitle={sub}
        onPress={() =>
          navigation.replace('ListStok', {
            title: namaKategori,
            id: id,
          })
        }
        onBack={() => {}}
      />
      <View style={styles.pageContainer}>
        <ScrollView>
          <InputText
            label="Nama Barang"
            value={form.nama}
            onChangeText={value => setForm('nama', value)}
          />
          <Jarak height={24} />
          <InputText
            label="Jumlah Ukuran 27-32"
            value={form.qty_22}
            onChangeText={value => setForm('qty_22', value)}
            keyboardType="numeric"
          />
          <Jarak height={24} />
          <InputText
            label="Jumlah Ukuran 33-38"
            value={form.qty_33}
            onChangeText={value => setForm('qty_33', value)}
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
                id: id,
              })
            }
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default AddStok;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Warna.white},
  pageContainer: {backgroundColor: Warna.white, flex: 1, padding: RFValue(30)},
});
