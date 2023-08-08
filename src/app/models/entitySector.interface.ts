import { IPhotoSector } from "./photoSector.interface";

export interface IEntitySector {
    id: string;
    idType: number;
    title: string;
    description: string;
    date: Date;
    type?: object;
    photoSector: IPhotoSector
  }