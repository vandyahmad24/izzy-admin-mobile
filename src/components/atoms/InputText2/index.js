import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {JenFonts, Warna} from '../../../utils';

const InputText2 = ({label, placeholder, readOnly, warna, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input(warna)}
        placeholder={placeholder}
        editable={readOnly}
        {...restProps}
      />
    </View>
  );
};

export default InputText2;

const styles = StyleSheet.create({
  label: {
    fontSize: RFValue(16),
    fontFamily: JenFonts.primary[400],
    marginBottom: 5,
  },
  input: warna => ({
    borderBottomWidth: RFValue(1),
    borderColor: Warna.black,
    padding: RFValue(2),
    color: Warna.black,
    backgroundColor: warna,
  }),
});
