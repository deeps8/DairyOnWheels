import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ScrollVanishDirective } from '../directives/scroll-vanish.directive';
import { ComponentsModule } from '../compomnents/compoments.module';
// import { DairyCardComponent } from '../compomnents/dairy-card/dairy-card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,ScrollVanishDirective]
})
export class HomePageModule {}
