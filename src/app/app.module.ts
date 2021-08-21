import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoaComponent } from './pessoa/pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    PessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
