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
  deleteTodo(id){
    return fetch(
      `/api/list/${id}`, {
        method: "DELETE",
      }
    ).then(response => response.json());
  }
  editTodo(id, activity, deadline, is_done){
    const data = {
      activity,
      deadline,
      is_done
    };
    return fetch(
      `/api/list/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      }
    ).then(response => response.json());
  }
};
export default new API();
