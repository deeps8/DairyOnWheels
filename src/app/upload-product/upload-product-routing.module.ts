import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadProductPage } from './upload-product.page';

const routes: Routes = [
  {
    path: '',
    component: UploadProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadProductPageRoutingModule {}
