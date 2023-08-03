import { Injectable } from '@angular/core';
import { ImageFile } from '../models/image-file.interface';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  //imgBlobList: Array<ImageFile> = [];

  constructor() { }

  private async processImageToBlob(file: File): Promise<ImageFile> {
    return new Promise<ImageFile>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        const blob = new Blob([new Uint8Array(event.target.result)], { type: file.type });
        const imageFile: ImageFile = {
          file: blob,
          type: file.type,
          url: URL.createObjectURL(blob),
          name: file.name
        };
        resolve(imageFile);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsArrayBuffer(file);
    });
  }

  async processListImageFile(images: FileList): Promise<ImageFile[]> {
    let imgBlobList: ImageFile[] = [];

    for (let i = 0; i < images.length; i++) {
      let result = await this.processImageToBlob(images[i]);
      if (result)
        imgBlobList.push(result);
    }
    return imgBlobList;
  }
}
