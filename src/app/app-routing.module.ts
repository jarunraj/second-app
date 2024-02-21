import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchComponent } from './crud/fetch/fetch.component';
import { PostComponent } from './crud/post/post.component';
import { UpdateComponent } from './crud/update/update.component';
import { DeleteComponent } from './crud/delete/delete.component';

const routes: Routes = [
  {path: 'fetch-product', component:FetchComponent},
  {path: 'update-popduct', component:UpdateComponent},
  {path: 'create-product', component:PostComponent},
  {path: 'delete-product', component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
