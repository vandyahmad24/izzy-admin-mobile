import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {JenFonts, Warna} from '../../../utils';

const InputText = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: JenFonts.primary[400], marginBottom: 5},
  input: {
    borderWidth: 1,
    borderColor: Warna.black,
    borderRadius: 8,
    padding: 10,
    color: Warna.black,
  },
});
