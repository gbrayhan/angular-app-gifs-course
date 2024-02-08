import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {SearchBoxComponent} from "./components/search-box/search-box.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainPageComponent,
    SearchBoxComponent
  ], exports: [
    MainPageComponent,
    SearchBoxComponent
  ]

})
export class GifsModule { }
