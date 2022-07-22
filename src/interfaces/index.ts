import { TPost, TDto, UpdateInterface } from "../types"

export interface IPropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export interface IGetPost {
  id: number
}

export type AxiosRequestConfig = {
  data: {
    params: TDto;
  };
};

export interface IGet extends TDto { };

export interface IUpdatePost extends UpdateInterface<TPost> { }

export interface IUpdateParams {
  request: IUpdatePost,
  config: Partial<AxiosRequestConfig>
}


