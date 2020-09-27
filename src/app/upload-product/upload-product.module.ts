import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadProductPageRoutingModule } from './upload-product-routing.module';

import { UploadProductPage } from './upload-product.page';
import { ScrollVanishDirective } from '../directives/scroll-vanish.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UploadProductPageRoutingModule
  ],
  declarations: [UploadProductPage,ScrollVanishDirective]
})
export class UploadProductPageModule {}
