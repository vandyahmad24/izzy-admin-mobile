import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {HeaderCustome} from '../../components';
import {API_HOST, JenFonts, showError, Warna} from '../../utils';
import {FAB, Portal} from 'react-native-paper';
import {Table, Row, Rows} from 'react-native-table-component';
import {RFValue} from 'react-native-responsive-fontsize';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import Share from 'react-native-share';

import ViewShot from 'react-native-view-shot';

const ListStok = ({navigation, route}) => {
  const dispatch = useDispatch();

  const [tableHead, setTableHead] = useState(['Size 27-32', 'Size 33-38']);
  const elementButton = (value, stok_id) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.replace('EditStok', {
            namaKategori: title,
            stok_id: stok_id,
            kategori_id: id,
          })
        }>
        <View>
          <Text style={styles.text}>{value}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const [tableData, setTableData] = useState([
    [elementButton('Mohon Tunggu'), elementButton('Mohon Tunggu')],
  ]);
  const {title, id} = route.params;

  useEffect(() => {
    dispatch({type: 'SET_LOADING', value: true});
    getKategori();
  }, []);

  const getKategori = () => {
    axios
      .get(`${API_HOST.url}/stok/${id}`)
      .then(function (response) {
        let data = response.data.data.stok;
        console.log('KUMLAH', data.length);
        dispatch({type: 'SET_LOADING', value: false});
        if (data.length === 0) {
          const temp = [];
          temp.push(['Data Tidak Ada', 'Data Tidak ada']);
          setTableData(temp);
        } else {
          const temp = [];
          Object.keys(data).map(item => {
            // console.log(item);
            temp.push([
              elementButton(
                `${data[item].nama} = ${data[item].qty_22}`,
                data[item].id,
              ),
              elementButton(
                `${data[item].nama} = ${data[item].qty_33}`,
                data[item].id,
              ),
            ]);
          });
          setTableData(temp);
        }
      })
      .catch(function (error) {
        // handle error
        dispatch({type: 'SET_LOADING', value: false});
        // console.log(error.response);
        showError(error.response.data.data.message);
      });
  };
  const viewShotRef = useRef();

  const [handleButton, setHandleButton] = useState(true);

  async function captureViewShot() {
    setHandleButton(false);
    const imageURI = await viewShotRef.current.capture();
    setHandleButton(true);
    await Share.open({url: imageURI});
    console.log('Ini capture view shot', imageURI);
  }
  const [state, setState] = useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  return (
    <ViewShot
      ref={viewShotRef}
      style={{flex: 1}}
      options={{format: 'jpg', quality: 1.0}}>
      <View style={styles.page}>
        <HeaderCustome
          title="List  Stok"
          subTitle={title}
          onPress={() => navigation.navigate('ManajemenStok')}
          onBack={() => {}}
        />

        <View style={styles.container}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('KategoriEdit', {
                id: id,
                namaKategori: title,
              })
            }>
            <Text style={{fontSize: 20, fontFamily: JenFonts.primary[800]}}>
              {title}
            </Text>
          </TouchableOpacity>
          <ScrollView>
            <Table borderStyle={styles.tableStyle}>
              <Row
                data={tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              <Rows data={tableData} textStyle={styles.text} />
            </Table>
          </ScrollView>
        </View>
        {/* <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() =>
          navigation.navigate('AddStok', {
            namaKategori: title,
            id: id,
          })
        }
      /> */}
        {handleButton && (
          <Portal>
            <FAB.Group
              open={open}
              icon={open ? 'set-all' : 'set-all'}
              actions={[
                {
                  icon: 'share',
                  label: 'Bagikan Nota',
                  onPress: () => captureViewShot(),
                  small: false,
                },
                {
                  icon: 'plus',
                  label: 'Tambah Stok',
                  onPress: () =>
                    navigation.replace('AddStok', {
                      namaKategori: title,
                      id: id,
                    }),
                  small: false,
                },
              ]}
              onStateChange={onStateChange}
            />
          </Portal>
        )}
      </View>
    </ViewShot>
  );
};

export default ListStok;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Warna.white},
  container: {
    flex: 1,
    padding: RFValue(16),
    paddingTop: RFValue(30),
    backgroundColor: Warna.white,
  },
  head: {height: RFValue(40), backgroundColor: Warna.primary},
  text: {margin: RFValue(6), textAlign: 'center'},
  fab: {
    position: 'absolute',
    margin: RFValue(16),
    right: RFValue(20),
    bottom: RFValue(20),
  },
  tableStyle: {borderWidth: 2, borderColor: '#c8e1ff'},
});
