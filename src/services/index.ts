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

const getPosts = (id: number, config: Partial<Config>) =>
  requestInstance
    .get<TPost[]>(`posts/${id}`, config);

export const postService = { getPost, getPosts };
