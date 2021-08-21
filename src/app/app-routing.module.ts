import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoasComponent } from './pessoas/pessoas.component';

const routes: Routes = [
  {
    path: '',
    component: PessoasComponent,
  },
  {
    path: 'pessoa',
    component: PessoaComponent,
  },
  {
    path: 'pessoa/:id',
    component: PessoaComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
