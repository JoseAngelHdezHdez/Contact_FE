import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ShowContactoComponent } from './contactos/show-contacto/show-contacto.component';
import { AddEditContactoComponent } from './contactos/add-edit-contacto/add-edit-contacto.component';
import { ContactoApiService } from './contacto-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    ShowContactoComponent,
    AddEditContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
