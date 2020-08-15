import { useStaticRendering } from "mobx-react";

import UsersStore from "./UsersStore";
import PostsStore from "./PostsStore";

const isServer = typeof window === "undefined";
useStaticRendering(isServer);

let store = null;

export default function initializeStore(
  initialData = { usersStore: {}, postsStore: {} }
) {
  if (isServer) {
    return {
      usersStore: new UsersStore(initialData.usersStore),
      postsStore: new PostsStore(initialData.postssStore)
    };
  }
  if (store === null) {
    store = {
      usersStore: new UsersStore(initialData.usersStore),
      postsStore: new UsersStore(initialData.postsStore)
    };
  }

  return store;
}
