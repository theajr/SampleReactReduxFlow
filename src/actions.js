import { FETCH_POST } from "./constants";
import axios from "axios";

export const getPostData = (postId) => ({
  type: FETCH_POST,
  payload: axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
});
