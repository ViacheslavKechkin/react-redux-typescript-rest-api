import { requestInstance } from "../utils";

import { TPost, TDto } from "../types";

type Config = {
  data: {
    params: TDto;
  };
};

const getPost = (id: number) =>
  requestInstance
    .get<TPost>(`posts/${id}`);

const deletePost = (id: number) =>
  requestInstance
    .delete<TPost>(`posts/${id}`);

const updatePost = (id: number, config: Partial<TPost>) =>
  requestInstance
    .patch<TPost>(`posts/${id}`, config);

const getPosts = (id: number, config: Partial<Config>) =>
  requestInstance
    .get<TPost[]>(`posts/list`, config);


export const postService = { getPost, getPosts, deletePost, updatePost };
