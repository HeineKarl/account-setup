import Axios from "axios";

let axios = Axios.create({
  //   withCredentials: false,
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  function (response) {
    console.log(response, "THIS IS THE RESPONSE");

    return response;
  },

  function (error) {
    if (error.message == "Network Error") {
      return Promise.resolve({
        status: 500,
        data: { message: "Server is down", ok: false, report: error.message },
      });
    }

    console.log(error);
    console.log("There is an " + error);
    return Promise.reject(error);
  }
);

export default axios;
