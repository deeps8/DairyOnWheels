import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';
import { ComponentsModule } from 'src/app/compomnents/compoments.module';
import { ScrollVanishDirective } from 'src/app/directives/scroll-vanish.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ProductPageRoutingModule
  ],
  declarations: [ProductPage,ScrollVanishDirective]
})
export class ProductPageModule {}
