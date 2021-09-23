import {showMessage} from 'react-native-flash-message';
import {Warna} from '../Warna';

export const showError = message => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: Warna.Message.danger,
    color: Warna.white,
  });
};

export const showSuccess = message => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: Warna.Message.success,
    color: Warna.white,
  });
};
