import { NgModule } from '@angular/core';
import { DairyCardComponent } from './dairy-card/dairy-card.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CartToastComponent } from './cart-toast/cart-toast.component';

@NgModule({
  declarations: [DairyCardComponent,CartToastComponent],
  imports:[IonicModule,CommonModule],
  exports: [DairyCardComponent,CartToastComponent]
})
export class ComponentsModule {}
