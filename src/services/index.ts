import { requestInstance } from "../utils";

import { TPost, TDto } from "../types";

type Config = {
  data: {
    params: TDto;
  };
};

type UpdatePostConfig = {
  data: {
    params: TPost;
  };
};

const getPost = (id: number) =>
  requestInstance
    .get<TPost>(`posts/${id}`);

const deletePost = (id: number) =>
  requestInstance
    .delete<TPost>(`posts/${id}`);

const updatePost = (id: number, data: TPost, config?: Partial<UpdatePostConfig>) => {
  const { userId, title, body } = data;

  requestInstance
    .put<TPost>(`posts/${id}`, {
      userId,
      id,
      title,
      body,
    });
}

const getPosts = () =>
  requestInstance
    .get<TPost[]>(`posts/list`);


export const postService = { getPost, getPosts, deletePost, updatePost };
