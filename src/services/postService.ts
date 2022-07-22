import { requestInstance } from "../utils";

import { TPost } from "../types";

import { IGet, IUpdatePost, AxiosRequestConfig } from "../interfaces";

const getPost = (id: number) =>
  requestInstance
    .get<TPost>(`posts/${id}`);

const deletePost = (id: number) =>
  requestInstance
    .delete<TPost>(`posts/${id}`);

const updatePost = ({ id, ...request }: IUpdatePost, config?: Partial<AxiosRequestConfig>) => {
  const { userId, title, body } = request;

  requestInstance
    .put<TPost>(`posts/${id}`, [{
      userId,
      id,
      title,
      body,
    }, [config]]);
}

const getPosts = ({ ...params }: IGet) =>
  requestInstance
    .get<TPost[]>(`posts`, { params });

export const postService = { getPost, getPosts, deletePost, updatePost };
