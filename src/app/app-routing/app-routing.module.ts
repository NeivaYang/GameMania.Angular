import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { LoginComponent } from '../views/login/login.component';
import { HistoriaComponent } from '../views/historia/historia.component';
import { EquipeComponent } from '../views/equipe/equipe.component';
import { ContatoComponent } from '../views/contato/contato.component';
import { ProdutosComponent } from '../views/produtos/produtos.component';

const routes: Routes = [
   { path: "", component: HomeComponent},
   { path: "login", component: LoginComponent },
   { path: "historia", component: HistoriaComponent},
   { path: "equipe", component: EquipeComponent},
   { path: "contato", component: ContatoComponent},
   { path: "produtos", component: ProdutosComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
