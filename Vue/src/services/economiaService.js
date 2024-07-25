import { economiaClient } from './apiService';

export default {
  getMoedas() {
    return economiaClient.get('/USD-BRL,EUR-BRL,BTC-BRL');
  },
  getLastDays(days) {
    return economiaClient.get(`json/daily/USD-BRL/${days}`)
  }
};
