import React, {useState, useRef} from 'react';
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
import {JenFonts, Warna} from '../../utils';
import {Table, Row, Rows} from 'react-native-table-component';
import {FAB, Portal} from 'react-native-paper';
import ViewShot, {captureScreen, captureRef} from 'react-native-view-shot';
import Share from 'react-native-share';

const Nota = ({navigation}) => {
  const viewShotRef = useRef();
  const [handleButton, setHandleButton] = useState(true);

  async function captureViewShot() {
    setHandleButton(false);
    const imageURI = await viewShotRef.current.capture();
    setHandleButton(true);
    await Share.open({url: imageURI});
    console.log('Ini capture view shot', imageURI);
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
      elementButton('1'),
      elementButton('Jinus botol selasa'),
      elementButton('Harga'),
      elementButton('Total'),
    ],
    ['', '', '', 'Total'],
  ]);

  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

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
            <InputText2 label="Nomer" />
          </View>
          <View style={{flex: 3, marginLeft: RFValue(10)}}>
            <InputText2 label="Tanggal" readOnly={false} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: RFValue(5),
            paddingVertical: RFValue(10),
          }}>
          <View style={{flex: 1}}>
            <InputText2 label="Kepada Yth" />
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
