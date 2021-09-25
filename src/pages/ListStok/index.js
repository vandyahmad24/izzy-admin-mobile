import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {HeaderCustome} from '../../components';
import {JenFonts, Warna} from '../../utils';
import {DataTable, FAB} from 'react-native-paper';
import {Table, Row, Rows} from 'react-native-table-component';
import {RFValue} from 'react-native-responsive-fontsize';

const ListStok = ({navigation, route}) => {
  const [tableHead, setTableHead] = useState(['Size 27-32', 'Size 33-38']);
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
    [elementButton('Hitam = 10 Lusin'), elementButton('Hitam = 10 Lusin')],
    ['Hitam = 10 Lusin', 'Hitam 10 Lusin'],
    ['Hitam = 10 Lusin', 'Hitam 10 Lusin'],
    ['Hitam = 10 Lusin', 'Hitam 10 Lusin'],
    ['Hitam = 10 Lusin', 'Hitam 10 Lusin'],
    [elementButton('Hitam = 10 Lusin'), elementButton('Hitam = 10 Lusin')],
    ['Hitam = 10 Lusin', 'Hitam 10 Lusin'],
    ['Hitam = 10 Lusin', 'Hitam 10 Lusin'],
    ['Hitam = 10 Lusin', 'Hitam 10 Lusin'],
    ['Hitam = 10 Lusin', 'Hitam 10 Lusin'],
    [elementButton('Hitam = 10 Lusin'), elementButton('Hitam = 10 Lusin')],
    ['Hitam = 10 Lusin', 'Hitam 10 Lusin'],
    ['Hitam = 10 Lusin', 'Hitam 10 Lusin'],
    ['Hitam = 10 Lusin', 'Hitam 10 Lusin'],
    ['Hitam = 10 Lusin', 'Hitam 10 Lusin'],
  ]);
  const {title, id} = route.params;

  return (
    <View style={styles.page}>
      <HeaderCustome
        title="List  Stok"
        subTitle={title}
        onPress={() => navigation.goBack()}
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
            <Row data={tableHead} style={styles.head} textStyle={styles.text} />
            <Rows data={tableData} textStyle={styles.text} />
          </Table>
        </ScrollView>
      </View>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() =>
          navigation.navigate('AddStok', {
            title: 'Rolling thunder',
          })
        }
      />
    </View>
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
