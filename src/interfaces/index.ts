import { TPost, TDto, UpdateInterface } from "../types"

export interface IGetPost {
  id: number
}

export type AxiosRequestConfig = {
  data: {
    params: TDto;
  };
};

export interface IGetPosts extends TDto { };

export interface IUpdatePost extends UpdateInterface<TPost> { }

export interface IUpdateParams {
  request: IUpdatePost,
  config: Partial<AxiosRequestConfig>
}
