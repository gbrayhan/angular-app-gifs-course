import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {SearchBoxComponent} from "./components/search-box/search-box.component";
import {ListCardsComponent} from "./components/list-cards/list-cards.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainPageComponent,
    SearchBoxComponent,
    ListCardsComponent
  ], exports: [
    MainPageComponent,
    SearchBoxComponent,
    ListCardsComponent
  ]

})
export class GifsModule { }
