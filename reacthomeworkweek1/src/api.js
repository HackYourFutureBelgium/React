class API {
  fetchList(){
    return fetch("/api/list").then(response => response.json());
  }
};

export default new API();
