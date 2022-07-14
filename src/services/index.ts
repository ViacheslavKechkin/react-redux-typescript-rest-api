import { requestInstance } from "../utils";

import { TPost, TDto } from "../types";

import { IGetPosts, IUpdatePost, AxiosRequestConfig } from "../interfaces";

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

const getPosts = ({ ...params }: IGetPosts) =>
  requestInstance
    .get<TPost[]>(`posts/list`, { params });


export const postService = { getPost, getPosts, deletePost, updatePost };
