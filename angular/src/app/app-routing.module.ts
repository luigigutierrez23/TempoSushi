import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { ArticleComponent } from'./pages/article/article.component';

const routes: Routes = [

  {path: '', component: MainComponent },
  {path: 'article/:id', component: ArticleComponent},
  {path:'**', pathMatch:'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
