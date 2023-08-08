import { IEntitySector } from "./entitySector.interface";

export interface IEntityType {
    id: string;
    title: string;
    code?: number;
    entitySector?: IEntitySector;
  }