import { NgModule } from '@angular/core';
import { DairyCardComponent } from './dairy-card/dairy-card.component';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [DairyCardComponent],
  imports:[IonicModule],
  exports: [DairyCardComponent]
})
export class ComponentsModule {}
