import { requestInstance } from "../utils";

import { TUser } from "../types";

import { IGet } from "../interfaces";

const getUsers = ({ ...params }: IGet) =>
  requestInstance
    .get<TUser[]>(`albums`, { params });


export const userService = { getUsers };
