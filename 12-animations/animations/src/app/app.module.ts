import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopoverComponent } from './components/popover/popover.component';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { ElementsComponent } from './elements/elements.component';

@NgModule({
  declarations: [AppComponent, PopoverComponent, OpenCloseComponent, ElementsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
