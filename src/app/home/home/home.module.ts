import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxJdenticonModule } from 'ngx-jdenticon';

import { HomeComponent } from '../components/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgxJdenticonModule
  ]
})
export class HomeModule { }
