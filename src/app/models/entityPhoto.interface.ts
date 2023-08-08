import { IFileData } from "./fileData.interface"

export interface IEntityPhoto {
    Id?: string 
    Url?: string 
    Description?: string 
    Order?: number
    CreatedAt?: Date
    FileData?: IFileData
}