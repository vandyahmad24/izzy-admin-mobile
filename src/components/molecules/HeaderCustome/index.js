import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcPanahKiri} from '../../../assets/Icon';
import {JenFonts, Warna} from '../../../utils';
import {RFValue} from 'react-native-responsive-fontsize';

const HeaderCustome = ({
  title,
  subTitle = 'Manajemen Stok Izzy Garment',
  onPress,
  onBack,
}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.back}>
            <IcPanahKiri />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default HeaderCustome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Warna.white,
    paddingHorizontal: RFValue(24),
    paddingTop: RFValue(30),
    paddingBottom: RFValue(24),
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {padding: RFValue(16)},
  title: {
    fontSize: RFValue(22),
    fontFamily: JenFonts.primary[700],
    color: Warna.black,
  },
  subTitle: {
    fontSize: RFValue(14),
    fontFamily: JenFonts.primary.normal,
    color: Warna.gray,
  },
});
