import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [FilterComponent],
  imports:[IonicModule],
  exports: [FilterComponent]
})
export class AppModule {}
