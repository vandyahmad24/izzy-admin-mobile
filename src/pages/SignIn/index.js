import React from 'react';
import {StyleSheet, View} from 'react-native';
import {InputText, HeaderCustome, ButtonCustome, Jarak} from '../../components';
import {showError, showSuccess, storeData, Warna} from '../../utils';
// import normalize from 'react-native-normalize';
import {RFValue} from 'react-native-responsive-fontsize';
import {useFrom} from '../../config';
import axios from 'axios';
import {useDispatch} from 'react-redux';

const SignIn = ({navigation}) => {
  const [form, setForm] = useFrom({email: '', password: ''});
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch({type: 'SET_LOADING', value: true});
    axios
      .post('https://izzy.asdosku.com/api/login', form)
      // const response = axios.post(url,data,});

      .then(res => {
        let user = res.data.data.user;
        setForm('reset');
        dispatch({type: 'SET_LOADING', value: false});
        showSuccess(`Login berhasil, Selamat Datang ${user.name}`);
        storeData('user_token', user.token_api);
        navigation.replace('Home');
      })
      .catch(err => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.response.data.data.message);
      });
  };
  return (
    <>
      <View style={styles.page}>
        <HeaderCustome title="Masuk" />
        <View style={styles.container}>
          <InputText
            label="Email"
            placeholder="Masukan Username Anda"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Jarak height={16} />
          <InputText
            label="Password"
            placeholder="Masukan Password Anda"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry={true}
          />
          <Jarak height={24} />
          <ButtonCustome text="Masuk" onPress={onSubmit} />
          <Jarak height={12} />
          <ButtonCustome text="Batal" color={Warna.gray} />
        </View>
      </View>
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Warna.white},
  container: {
    backgroundColor: Warna.white,
    paddingHorizontal: RFValue(24),
    paddingVertical: RFValue(26),
    marginTop: RFValue(24),
    flex: 1,
  },
});
