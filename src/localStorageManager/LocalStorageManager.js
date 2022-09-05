export class LocalStorageManager {

    static getAccessToken() {
      return localStorage.getItem('accessToken') || '';
    }

}
  