import { observable, action } from "mobx";

class PostStore {
  @observable post = null;

  endpoint = "https://jsonplaceholder.typicode.com/posts";

  constructor(initialData = {}) {
    this.post = initialData.post;
  }

  async fetch(id) {
    const response = await fetch(`${this.endpoint}/${id}/`);
    this.setPost(response.json());
  }

  @action setPost(post) {
    this.post = post;
  }
}

export default PostStore;
