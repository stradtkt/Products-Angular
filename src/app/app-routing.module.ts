import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromProducts from './components/product';

const routes: Routes = [
  {path: '', component: fromProducts.ProductListComponent},
  {path: '/:id', component: fromProducts.ProductDetailComponent},
  {path: '/create', component: fromProducts.ProductCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
