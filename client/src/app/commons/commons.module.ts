import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats/stats.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    StatsComponent
  ],
  exports:[
    StatsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class CommonsModule { }
