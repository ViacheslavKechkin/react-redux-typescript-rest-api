import { requestInstance } from "../utils";

import { TComment } from "../types";

import { IGet } from "../interfaces";

const getComments = ({ ...params }: IGet) =>
  requestInstance
    .get<TComment[]>(`comments`, { params });


export const commentService = { getComments };
