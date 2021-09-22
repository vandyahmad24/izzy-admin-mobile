import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {IcPanahKanan} from '../../../assets/Icon';
import {JenFonts, Warna} from '../../../utils';

const ListBarang = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.containerList}>
          <View style={styles.list}>
            <Text style={styles.title}>
              Rolling thunder panjang jeans slim fit
            </Text>
            <Text>Terakhir diedit </Text>
          </View>
          <View style={{}}>
            <IcPanahKanan />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListBarang;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: RFValue(10),
    borderRadius: RFValue(10),
  },
  containerList: {
    padding: RFValue(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {flex: 1},
  title: {
    fontSize: RFValue(17),
    // marginLeft: 10,
    fontFamily: JenFonts.primary[600],
  },
});
