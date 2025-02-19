import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper"
import axios from "axios"
import { Post } from "./types";

export const postProvider: ResourceProvider<Post> = {
  resource: "posts",
  getList: async () => {
    return axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.data);
  }
}

