import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdmToolbarComponent } from 'src/app/components/adm-toolbar/adm-toolbar.component';

@Component({
  selector: 'app-adm-layout',
  templateUrl: './adm-layout.component.html',
  styleUrls: ['./adm-layout.component.css'],
  standalone: true,
  imports: [RouterModule, AdmToolbarComponent],
})
export class AdmLayoutComponent {

}
