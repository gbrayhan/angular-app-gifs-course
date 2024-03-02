import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {LazyImageComponent} from "./components/lazy-image/lazy-image.component";


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SidebarComponent,
    LazyImageComponent
  ],
  exports: [
    SidebarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
