import SecureStorage from 'SecureStorage';
import CryptoJS from 'crypto-js';

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

// there is no need to stringify/parse you objects before and after storing.

//secureStorage.setItem('data', data);
// stores in localStorage like:
// key => value
// "ad36d572..." => "w1svi6n..."

//var decryptedData = secureStorage.getItem('data');
// returns { secret: 'data' }

//secureStorage.removeItem('data');
// removes the entry 'data'

//secureStorage.key(id)
// returns the hashed version of the key you passed into setItem with the given id.

//secureStorage.clear();
// clears all data in the underlining sessionStorage/localStorage.

//secureStorage.length();
// the number of entries in the underlining sessionStorage/localStorage.