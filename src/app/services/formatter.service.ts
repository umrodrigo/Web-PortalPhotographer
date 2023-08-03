import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatterService {
  private formData: FormData = new FormData;

  constructor() { }

  buildFormData(data: any, parentKey?: string): FormData {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File) && !(data instanceof Blob)) {
        Object.keys(data).forEach(key => {
            this.buildFormData(data[key], parentKey ? `${parentKey}.${key}` : key);
        });
    } else if (data !== null && data !== undefined) {
        if (data instanceof Date) {
            data = data.toJSON();
        }
        this.formData.append("form." + (parentKey || ''), data);
    }
    return this.formData;
  }

  
}
