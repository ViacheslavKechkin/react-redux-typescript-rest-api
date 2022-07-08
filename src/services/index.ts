import { IGetPost, IGetPosts } from "../interfaces";

import { requestInstance } from "../utils";

import { TPost, TDto } from "../types";

type Config = {
  data: {
    params: TDto;
  };
};

const getPost = (id: IGetPost) =>
  requestInstance
    .get<TPost>(`posts/${id}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));

const getPosts = (id: IGetPosts, config: Config) =>
  requestInstance
    .get<TPost[]>(`posts/${id}`, config)
    .then((res) => res.data)
    .catch((error) => console.log(error));

export const postService = { getPost, getPosts };
