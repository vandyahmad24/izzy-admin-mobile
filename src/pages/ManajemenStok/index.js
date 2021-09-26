import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {HeaderCustome, ListBarang} from '../../components';
import {API_HOST, getData, Warna} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {FAB} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {showError, showSuccess} from '../../utils';

const ManajemenStok = ({navigation}) => {
  const [listKategori, setListKategori] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'SET_LOADING', value: true});
    getKategori();
  }, []);

  const getKategori = () => {
    let token = getData('user_token').then(res => {
      return res;
    });
    axios
      .get(`${API_HOST.url}/kategori`, {
        token: token,
      })
      .then(function (response) {
        let data = response.data.data;
        setListKategori(data);
        dispatch({type: 'SET_LOADING', value: false});
      })
      .catch(function (error) {
        // handle error
        dispatch({type: 'SET_LOADING', value: false});
        console.log(error.response);
        showError(error.response.data.data.message);
      });
  };

  return (
    <View style={styles.page}>
      <HeaderCustome
        title="Manajemen Stok"
        subTitle="Manajemen Stok Jeans"
        onPress={() => navigation.navigate('Home')}
        onBack={() => {}}
      />
      <View style={styles.pageContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {listKategori.map(value => {
            return (
              <ListBarang
                key={value.id}
                title={value.nama}
                lastEdit={value.waktu}
                onPress={() =>
                  navigation.navigate('ListStok', {
                    id: value.id,
                    title: value.nama,
                  })
                }
              />
            );
          })}
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
