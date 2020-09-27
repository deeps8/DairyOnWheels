import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadProductPage } from './upload-product.page';

describe('UploadProductPage', () => {
  let component: UploadProductPage;
  let fixture: ComponentFixture<UploadProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
