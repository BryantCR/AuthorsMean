import { NgModule } from '@angular/core';
import { AuthorListComponent } from './author-list/author-list.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

let routes: Routes =[
  {
    path:'authorslist',
    component:AuthorListComponent
  },
  {
    path:'edit/:id',
    component:EditComponent
  },
  {
    path:'create',
    component:CreateComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/authorslist'
  },
  {
    path:'**',
    component: PageNotFoundComponent
  },
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }