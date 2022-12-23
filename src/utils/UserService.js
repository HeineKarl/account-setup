import axios from "./Axios";

// import VueJwtDecode from "vue-jwt-decode";

const url = "http://localhost:5000/users/";

class UserService {
  // static setToken() {
  //   const token = localStorage.getItem("token");
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // }

  static generateToken() {
    // console.log("GenToken is Used");
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(url + "token");
        console.log(response);
        resolve(response);
      } catch (err) {
        // console.log(err);
        // console.log(Object.keys(err));

        // console.log(err.response.status == 401, "SOEMTHINE");
        if (err.response.status == 401 || err.response.status == 403) {
          resolve(err.response);
        }

        reject(err);
      }
    });
  }
  static getUser() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        console.log(res);
      } catch (err) {
        reject(err);
      }
    });
  }

  static logoutUser(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(url + "logout", { id });
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static insertUser(username, email, password) {
    console.log("InsertUser Function");
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(url + "register", {
          username,
          email,
          password,
        });

        const data = res.data;
        resolve(data);
      } catch (err) {
        if (err.request.status == 409) {
          resolve(err.response);
          return;
        }

        reject(err);
      }
    });
  }

  static verifyUser(email, password) {
    console.log("verifyUser was used");
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(url + "login", { email, password });
        const data = res.data;

        resolve(data);
      } catch (err) {
        console.log(Object.keys(err));

        console.log(err.message);

        if (err.response.status == 401) {
          resolve(err.response.data);
          return;
        }
        if (err.response.status == 404) {
          resolve(err.response.data);
        }

        reject(err);
      }
    });
  }
}

export default UserService;
