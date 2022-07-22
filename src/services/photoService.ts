import { requestInstance } from "../utils";

import { TPhoto } from "../types";

import { IGet } from "../interfaces";

const getPhotos = ({ ...params }: IGet) =>
  requestInstance
    .get<TPhoto[]>(`photos`, { params });


export const photoService = { getPhotos };
