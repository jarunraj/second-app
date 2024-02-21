import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, NgModel } from '@angular/forms';
import { QuickmathComponent } from './quickmath/quickmath.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './crud/post/post.component';
import { UpdateComponent } from './crud/update/update.component';
import { DeleteComponent } from './crud/delete/delete.component';
import { FetchComponent } from './crud/fetch/fetch.component';



@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    QuickmathComponent,
    HttpComponent,
    PostComponent,
    UpdateComponent,
    DeleteComponent,
    FetchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
