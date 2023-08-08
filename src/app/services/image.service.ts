import { IEntityPhoto } from './../models/entityPhoto.interface';
import { Injectable } from '@angular/core';
import { IFileData } from '../models/fileData.interface';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  private async processFileToBlob(file: File): Promise<IFileData> {
    return new Promise<IFileData>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        const blob = new Blob([new Uint8Array(event.target.result)], { type: file.type });
        const FileData: IFileData = {
          file: blob,
          type: file.type,
          url: URL.createObjectURL(blob),
          extension: file.name.split(".").pop()
        };
        resolve(FileData);
      };

      reader.onerror = (error) => reject(error);

      reader.readAsArrayBuffer(file);
    });
  }

  async createEntityPhoto(list: FileList): Promise<IEntityPhoto[]> {
    let photoList: IEntityPhoto[] = [];
    for (let i = 0; i < list.length; i++) {
      let result = await this.processFileToBlob(list[i]);
      if (result)
        photoList.push({
          FileData: result
        } as IEntityPhoto)
    }
    return photoList;
  }
  
}
