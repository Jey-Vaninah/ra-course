import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper"
import axios from "axios"
import { User } from "./types"

export const userProvider: ResourceProvider<User> = {
  resource: "users",
  getList: async () => {
    return axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then(response => response.data);
  }
}


