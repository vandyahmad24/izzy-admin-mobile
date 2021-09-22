import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddBarangNota,
  AddNota,
  AddStok,
  Home,
  ListStok,
  SignIn,
  SplashScreen,
  StokKategori,
} from '../pages';
import ManajemenStok from '../pages/ManajemenStok';
import Nota from '../pages/Nota';
const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ManajemenStok"
        component={ManajemenStok}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Nota"
        component={Nota}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StokKategori"
        component={StokKategori}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListStok"
        component={ListStok}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddStok"
        component={AddStok}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddNota"
        component={AddNota}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddBarangNota"
        component={AddBarangNota}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
