import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeTreeComponent } from './components/employee-tree/employee-tree.component';
import { EmployeeNodeComponent } from './components/employee-node/employee-node.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTreeComponent,
    EmployeeNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [EmployeeTreeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
