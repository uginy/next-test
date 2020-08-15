import { observable, action } from "mobx";

class UsersStore {
  @observable user = null;

  endpoint = "https://jsonplaceholder.typicode.com/users";

  constructor(initialData = {}) {
    this.user = initialData.user;
  }

  async fetch(id) {
    const response = await fetch(`${this.endpoint}/${id}/`);
    this.setPost(response.json());
  }

  @action setUser(user) {
    this.post = user;
  }
}

export default UsersStore;
