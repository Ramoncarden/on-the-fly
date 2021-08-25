import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3002';

/** API class.
 * 
 * Static class tying together methods used to get/send to the api.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't be any API-aware stuff elsewhere in the frontend.
 * 
 */

class OnTheFlyApi {
  // the token for interacting with the API will be stored here
  static token;

  static async request(endpoint, data = {}, method = 'get') {
    console.debug('API Call:', endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${OnTheFlyApi.token}` };
    const params = method === 'get' ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [ message ];
    }
  }

  // Individual API routes

  // Get current user
  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  // Get token for login for username, password
  static async login(data) {
    let res = await this.request(`auth/token`, data, 'post');
    return res.user;
  }

  // Signup for site
  static async signup(data) {
    let res = await this.request(`auth/register`, data, 'post');
    return res.user;
  }

  // save user profile page
  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, 'patch');
    return res.user;
  }
}

export default OnTheFlyApi;
