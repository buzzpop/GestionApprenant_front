import {BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddPromosComponent } from './add-promos/add-promos.component';
import { AuthComponent } from './auth/auth.component';
import { CompetencesComponent } from './competences/competences.component';
import { AddCompetenceComponent } from './competences/add-competence/add-competence.component';
import { ListCompetencesComponent } from './competences/list-competences/list-competences.component';
import { FooterComponent } from './footer/footer.component';
import { FourOurFourComponent } from './four-our-four/four-our-four.component';
import { GroupeCompetencesComponent } from './groupe-competences/groupe-competences.component';
import { AddGroupCompetencesComponent } from './groupe-competences/add-group-competences/add-group-competences.component';
import { ListGroupCompetencesComponent } from './groupe-competences/list-group-competences/list-group-competences.component';
import { ItemGroupCompetenceComponent } from './groupe-competences/list-group-competences/item-group-competence/item-group-competence.component';
import { ProfilComponent } from './profil/profil.component';
import { ListProfilsComponent } from './profil/list-profils/list-profils.component';
import { UsersProfilComponent } from './profil/users-profil/users-profil.component';
import { ProfilSortieComponent } from './profil-sortie/profil-sortie.component';
import { AddProfilSortieComponent } from './profil-sortie/add-profil-sortie/add-profil-sortie.component';
import { EditProfilSortieComponent } from './profil-sortie/edit-profil-sortie/edit-profil-sortie.component';
import { ListProfilSortieComponent } from './profil-sortie/list-profil-sortie/list-profil-sortie.component';
import { AddReferentielComponent } from './referentiel/add-referentiel/add-referentiel.component';
import { ListReferentielsComponent } from './referentiel/list-referentiels/list-referentiels.component';
import { ItemReferentielComponent } from './referentiel/list-referentiels/item-referentiel/item-referentiel.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DetailsUserComponent } from './users/details-user/details-user.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ReferentielComponent } from './referentiel/referentiel.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InterceptorService} from './services/interceptor.service';
import { AddProfilComponent } from './profil/add-profil/add-profil.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FieldsetModule} from 'primeng/fieldset';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CollapseModule, WavesModule } from 'angular-bootstrap-md';
import { IconsModule } from 'angular-bootstrap-md'
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './pipe/filter.pipe';
import { TriAlphaPipe } from './pipe/tri-alpha.pipe';
import { QRCodeModule } from 'angularx-qrcode';
import { SummarizePipe } from './pipe/summarize.pipe';
import { RefertielFilterPipe } from './pipe/refertiel-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddPromosComponent,
    AuthComponent,
    CompetencesComponent,
    AddCompetenceComponent,
    ListCompetencesComponent,
    FooterComponent,
    FourOurFourComponent,
    GroupeCompetencesComponent,
    AddGroupCompetencesComponent,
    ListGroupCompetencesComponent,
    ItemGroupCompetenceComponent,
    ProfilComponent,
    ListProfilsComponent,
    UsersProfilComponent,
    ProfilSortieComponent,
    AddProfilSortieComponent,
    EditProfilSortieComponent,
    ListProfilSortieComponent,
    AddReferentielComponent,
    ListReferentielsComponent,
    ItemReferentielComponent,
    UsersComponent,
    AddUserComponent,
    DetailsUserComponent,
    ListUsersComponent,
    ReferentielComponent,
    AddProfilComponent,
    FilterPipe,
    TriAlphaPipe,
    SummarizePipe,
    RefertielFilterPipe,
  ],
  imports: [
    BrowserModule,
    FieldsetModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    CollapseModule,
    WavesModule,
    IconsModule,
    AngularMultiSelectModule,
    NgxPaginationModule,
    QRCodeModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
