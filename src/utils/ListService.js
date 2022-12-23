import axios from "axios";

const url = "http://localhost:5000/lists/";

class ListService {
  static getLists() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        console.log(data);
        resolve(data);
      } catch (err) {
        console.log("Error in getLists");
        reject(err);
      }
    });
  }
  static insertList(listname, isDone, createdAt) {
    return axios.post(url, {
      listname,
      isDone,
      createdAt,
    });
  }

  static updateList(id, listname, isDone, createdAt) {
    return axios.put(url + id, {
      listname,
      isDone,
      createdAt,
    });
  }

  static deleteList(id) {
    return axios.delete(url + id);
  }
}

export default ListService;
