import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from './users/list-users/list-users.component';
import {AddUserComponent} from './users/add-user/add-user.component';
import {DetailsUserComponent} from './users/details-user/details-user.component';
import {ListProfilsComponent} from './profil/list-profils/list-profils.component';
import {FourOurFourComponent} from './four-our-four/four-our-four.component';
import {AuthComponent} from './auth/auth.component';
import {UsersProfilComponent} from './profil/users-profil/users-profil.component';
import {ListProfilSortieComponent} from './profil-sortie/list-profil-sortie/list-profil-sortie.component';
import {AddProfilSortieComponent} from './profil-sortie/add-profil-sortie/add-profil-sortie.component';
import {EditProfilSortieComponent} from './profil-sortie/edit-profil-sortie/edit-profil-sortie.component';
import {AddGroupCompetencesComponent} from './groupe-competences/add-group-competences/add-group-competences.component';
import {ListGroupCompetencesComponent} from './groupe-competences/list-group-competences/list-group-competences.component';
import {ListCompetencesComponent} from './competences/list-competences/list-competences.component';
import {AddCompetenceComponent} from './competences/add-competence/add-competence.component';
import {ListReferentielsComponent} from './referentiel/list-referentiels/list-referentiels.component';
import {AddReferentielComponent} from './referentiel/add-referentiel/add-referentiel.component';
import {AddPromosComponent} from './add-promos/add-promos.component';
import {AddProfilComponent} from './profil/add-profil/add-profil.component';
import {DetailUserResolverService} from './services/detail-user-resolver.service';
import {GetUserProfilByIdresolverService} from './services/getUserProfilByIdresolver.service';

const routes: Routes = [
  {path: '', redirectTo: '/authentification', pathMatch: 'full'},
  {path: 'authentification', component: AuthComponent},
  {path: 'users', component: ListUsersComponent},
  {path: 'users/add', component: AddUserComponent},
  {path: 'users/:id', component: DetailsUserComponent, resolve:{userDetails:DetailUserResolverService}},
  {path: 'users/edit/:id', component: AddUserComponent, resolve:{userToEdit:DetailUserResolverService}},
  {path: 'profils',
    component: ListProfilsComponent,
    children: [
      {path: ':id/users', component: UsersProfilComponent},
      {path: 'add', component: AddProfilComponent}
    ]
  },
  {path: 'profil-sortie',
    component: ListProfilSortieComponent,
    children: [
      {path: 'add', component: AddProfilSortieComponent},
      {path: 'edit/:id', component: EditProfilSortieComponent,resolve:{profilSortie:GetUserProfilByIdresolverService}},
    ]
  },
  {path: 'groupe-competences', component: ListGroupCompetencesComponent},
  {path: 'groupe-competences/add', component: AddGroupCompetencesComponent},
  {path: 'competences', component: ListCompetencesComponent},
  {path: 'competences/add', component: AddCompetenceComponent},
  {path: 'referentiels', component: ListReferentielsComponent},
  {path: 'referentiels/add', component: AddReferentielComponent},
  {path: 'add-promos', component: AddPromosComponent},

  {
    path: 'not-found', component: FourOurFourComponent
  },
  {
    path: '**', redirectTo: '/not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
