import { ImageService } from './../../services/image.service';
import { Component } from '@angular/core';
import { ImageFile } from 'src/app/models/image-file.interface';
import { ApiService } from 'src/app/services/api.service';
import { FormatterService } from 'src/app/services/formatter.service';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent {
  buffer!: ArrayBuffer;
  selectedImages!: FileList | null;
  listImageFile: ImageFile[] = [];

  constructor(private imageService: ImageService, private api: ApiService) {}

  onFileChange(event: Event): void {
    let input = event.target as HTMLInputElement;
    this.selectedImages = input.files;
    this.convertFilesToBlobs();
  }
  
  async convertFilesToBlobs(): Promise<void> {
    if (this.selectedImages && this.selectedImages.length > 0) {
      this.listImageFile = await this.imageService.processListImageFile(this.selectedImages);
    }
  }

  sendIMG() {
    this.api.saveBlob("caminho", { file: this.buffer })
  }
}
