import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {HeaderCustome, ListBarang} from '../../components';
import {API_HOST, getData, Warna} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {FAB} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {showError, showSuccess} from '../../utils';

const ManajemenStok = ({navigation}) => {
  const [listKategori, setListKategori] = useState([]);
  // let dataUser = null;
  useEffect(() => {
    let token = getData('user_token').then(res => {
      return res;
    });
    ListKategori(token);
    console.log('ini list ', listKategori);
  }, []);
  const ListKategori = token => {
    axios
      .get(`${API_HOST.url}/kategori`, {
        token: token,
      })
      .then(function (response) {
        // handle success
        let data = response.data.data;
        console.log('INI DATA', data);
        setListKategori(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error.response);
      });
  };

  return (
    <View style={styles.page}>
      <HeaderCustome
        title="Manajemen Stok"
        subTitle="Manajemen Stok Jeans"
        onPress={() => navigation.goBack()}
        onBack={() => {}}
      />
      <View style={styles.pageContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ListBarang
            onPress={() =>
              navigation.navigate('ListStok', {
                title: 'Rollignthunder',
                id: 11,
              })
            }
          />
          <ListBarang />
          <ListBarang />
          <ListBarang />
          <ListBarang />
          <ListBarang />
          <ListBarang />
          <ListBarang />
          <ListBarang />
        </ScrollView>
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => navigation.navigate('StokKategori')}
        />
      </View>
    </View>
  );
};

export default ManajemenStok;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Warna.white},
  pageContainer: {backgroundColor: Warna.white, flex: 1, padding: RFValue(30)},
  fab: {
    position: 'absolute',
    margin: RFValue(16),
    right: RFValue(20),
    bottom: RFValue(20),
  },
});
