import { IGetPost, IGetPosts } from "../interfaces";

import { requestInstance } from "../utils";

import { TPost, TDto } from "../types"

const getPost = (id: IGetPost) =>
  requestInstance
    .get<TPost>(`posts/${id}`)
    .then((res) => res.data);

const getPosts = (id: IGetPosts, config: TDto) =>
  requestInstance
    .get<TPost>(`posts/${id}`)
    .then((res) => res.data);
