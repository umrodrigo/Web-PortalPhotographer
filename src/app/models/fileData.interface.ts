export interface IFileData {
    file: Blob;
    type?: string;
    url: string;
    extension?: string;
    bytes?: ArrayBuffer
  }