import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmToolbarComponent } from './adm-toolbar.component';

describe('AdmToolbarComponent', () => {
  let component: AdmToolbarComponent;
  let fixture: ComponentFixture<AdmToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmToolbarComponent]
    });
    fixture = TestBed.createComponent(AdmToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
