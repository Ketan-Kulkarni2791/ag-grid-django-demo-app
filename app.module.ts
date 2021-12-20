import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonService } from './common.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridInfoComponent } from './grid-info/grid-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GridInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    AgGridModule.withComponents([GridInfoComponent])
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
