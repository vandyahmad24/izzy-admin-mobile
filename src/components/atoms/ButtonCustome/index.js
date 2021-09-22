import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {JenFonts, Warna} from '../../../utils';

const ButtonCustome = ({
  text,
  color = Warna.primary,
  warnaText = Warna.white,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.kata(warnaText)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCustome;

const styles = StyleSheet.create({
  container: color => ({backgroundColor: color, padding: 12, borderRadius: 20}),
  kata: warnaText => ({
    color: warnaText,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: JenFonts.primary.normal,
  }),
});
