import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartToastComponent } from './cart-toast.component';

describe('CartToastComponent', () => {
  let component: CartToastComponent;
  let fixture: ComponentFixture<CartToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartToastComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
