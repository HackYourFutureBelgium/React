class API {
  fetchList(){
    return fetch("/api/list").then(response => response.json());
  }
  addTodo(data){
    return fetch(
      "/api/list", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      }
    ).then(response => response.json());

  }
};

export default new API();
