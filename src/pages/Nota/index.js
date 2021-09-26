import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {LogoIzzy} from '../../assets/Icon';
import {InputText2} from '../../components';
import {
  API_HOST,
  getData,
  JenFonts,
  showError,
  storeData,
  Warna,
} from '../../utils';
import {Table, Row, Rows} from 'react-native-table-component';
import {FAB, Portal} from 'react-native-paper';
import ViewShot, {captureScreen, captureRef} from 'react-native-view-shot';
import Share from 'react-native-share';
import axios from 'axios';
import {useDispatch} from 'react-redux';

const Nota = ({navigation}) => {
  const viewShotRef = useRef();
  const [handleButton, setHandleButton] = useState(true);

  async function captureViewShot() {
    setHandleButton(false);
    const imageURI = await viewShotRef.current.capture();
    setHandleButton(true);
    await Share.open({url: imageURI});
  }

  const [tableHead, setTableHead] = useState([
    'Qty',
    'Nama Barang',
    'Harga',
    'Total',
  ]);
  const elementButton = value => {
    return (
      <TouchableOpacity onPress={() => console.log(value)}>
        <View>
          <Text style={styles.text}>{value}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const [tableData, setTableData] = useState([
    [
      elementButton('Loading'),
      elementButton('Loading'),
      elementButton('Loading'),
      elementButton('Loading'),
    ],
    ['', '', '', 'Mohon Tunggu'],
  ]);

  const [state, setState] =useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;
  const [currentDate, setCurrentDate] = useState('');
  const getDate = () => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    // var hours = new Date().getHours(); //Current Hours
    // var min = new Date().getMinutes(); //Current Minutes
    // var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(date + '/' + month + '/' + year);
  };
  useEffect(() => {
    getDate();
    getList();
    getData('namaNota').then(res => {
      setNamaNota(res);
    });
    getData('nomerNota').then(res => {
      setNomer(res);
    });
  }, []);

  const getList = () => {
    axios
      .get(`${API_HOST.url}/nota-detail`)
      .then(res => {
        let data = res.data.data;
        console.log(data.NotaDetail);
        const temp = [];
        Object.keys(data.NotaDetail).map(item => {
          temp.push([
            elementButton(
              `${data.NotaDetail[item].qty}`,
              data.NotaDetail[item].id,
            ),
            elementButton(
              `${data.NotaDetail[item].nama}`,
              data.NotaDetail[item].id,
            ),
            elementButton(
              `${data.NotaDetail[item].harga}`,
              data.NotaDetail[item].id,
            ),
            elementButton(
              `${data.NotaDetail[item].total}`,
              data.NotaDetail[item].id,
            ),
          ]);
        });
        temp.push(['-', '-', '-', data.Total]);
        setTableData(temp);
      })
      .catch(err => {
        // dispatch({type: 'SET_LOADING', value: false});
        // showError(err.response.data.data.message);
        setTableData([
          [
            elementButton(''),
            elementButton(''),
            elementButton(''),
            elementButton(''),
          ],
        ]);
      });
  };

  const [nomer, setNomer] = useState('0');
  const [namaNota, setNamaNota] = useState('');

  const handleSetNomer = value => {
    setNomer(value);
    storeData('nomerNota', value);
  };
  const handleSetNama = value => {
    setNamaNota(value);
    storeData('namaNota', value);
  };
  const dispatch = useDispatch();

  const resetNota = () => {
    dispatch({type: 'SET_LOADING', value: true});
    axios
      .delete(`${API_HOST.url}/nota-detail/delete`)
      .then(res => {
        navigation.replace('Nota');
        dispatch({type: 'SET_LOADING', value: false});
      })
      .catch(err => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.response.data.data.message);
      });
    setNamaNota('');
    storeData('namaNota', '');
    setNomer('0');
    storeData('nomerNota', '0');
  };

  return (
    <ViewShot
      ref={viewShotRef}
      style={{flex: 1}}
      options={{format: 'jpg', quality: 1.0}}>
      <View style={styles.page}>
        <View style={{flexDirection: 'row'}}>
          <LogoIzzy width={RFValue(110)} height={RFValue(110)} />
          <View>
            <Text style={{fontFamily: JenFonts.primary[800], fontSize: 25}}>
              Izzi Garment
            </Text>
            <View>
              <Text style={{fontSize: RFValue(12)}}>
                Gg 3 No 11 RT 12/RW 03 Jebegan Podo.
              </Text>
              <Text style={{fontSize: RFValue(12)}}>
                Kec. Kedungwuni Pekalongan Jawa Tengah
              </Text>
              <Text style={{fontSize: RFValue(12)}}>
                HP/WA : +(62) 821-2345-9634
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: RFValue(5),
          }}>
          <View style={{flex: 1}}>
            <InputText2
              label="Nomer"
              value={nomer}
              onChangeText={value => handleSetNomer(value)}
              keyboardType="numeric"
            />
          </View>
          <View style={{flex: 3, marginLeft: RFValue(10)}}>
            <InputText2 label="Tanggal" value={currentDate} readOnly={false} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: RFValue(5),
            paddingVertical: RFValue(10),
          }}>
          <View style={{flex: 1}}>
            <InputText2
              label="Kepada Yth"
              value={namaNota}
              onChangeText={value => handleSetNama(value)}
            />
          </View>
        </View>
        <View style={styles.container}>
          <ScrollView>
            <Table borderStyle={styles.tableStyle}>
              <Row
                data={tableHead}
                style={styles.head}
                textStyle={styles.text}
                flexArr={[1, 2, 1, 1]}
              />
              <Rows
                data={tableData}
                textStyle={styles.text}
                flexArr={[1, 2, 1, 1]}
              />
            </Table>
          </ScrollView>
          {/* <TouchableOpacity onPress={ShareImage}>
          <Text>Halo</Text>
        </TouchableOpacity> */}
          {handleButton && (
            <Portal>
              <FAB.Group
                open={open}
                icon={open ? 'set-all' : 'set-all'}
                actions={[
                  {
                    icon: 'delete',
                    label: 'Reset Nota',
                    onPress: () => resetNota(),
                    small: false,
                  },
                  {
                    icon: 'share',
                    label: 'Bagikan Nota',
                    onPress: () => captureViewShot(),
                    small: false,
                  },
                  {
                    icon: 'plus',
                    label: 'Tambah Stok',
                    onPress: () => navigation.replace('AddBarangNota'),
                    small: false,
                  },
                ]}
                onStateChange={onStateChange}
              />
            </Portal>
          )}
        </View>
      </View>
    </ViewShot>
  );
};

export default Nota;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#fff'},
  container: {
    flex: 1,
    padding: RFValue(2),
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
  fab: {
    position: 'absolute',
    margin: RFValue(16),
    right: RFValue(20),
    bottom: RFValue(20),
  },
});
