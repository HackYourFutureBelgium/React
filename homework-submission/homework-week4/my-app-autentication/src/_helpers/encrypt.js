import SecureStorage from 'secure-web-storage';
var CryptoJS = require("crypto-js");

let SECRET_KEY = 'hackyourfuture';

let SecureStorageHYFPost = new SecureStorage(localStorage, {
  hash: function hash(key) {
    key = CryptoJS.SHA256(key, SECRET_KEY);

    return key.toString();
  },
  encrypt: function encrypt(data) {
    data = CryptoJS.AES.encrypt(data, SECRET_KEY);

    data = data.toString();

    return data;
  },
  decrypt: function decrypt(data) {
    data = CryptoJS.AES.decrypt(data, SECRET_KEY);

    data = data.toString(CryptoJS.enc.Utf8);

    return data;
  }
});

export default SecureStorageHYFPost;

//secureStorage.setItem('data', data);
//var decryptedData = secureStorage.getItem('data');
// removes the entry 'data'