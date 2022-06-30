import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider'
import {CalendarModule} from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';

import "@angular/compiler";
import { GestionsEntrepriseComponent } from './gestions-entreprise/gestions-entreprise.component';
import { ComptesComponent } from './comptes/comptes.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RouterModule,Routes } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { ManageserviceService } from './services/manageservice.service';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DropdownModule} from 'primeng/dropdown';
import { UpdateContactComponent } from './contacts/update-contact/update-contact.component';
import{FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { AddCompteComponent } from './comptes/add-compte/add-compte.component';
import { UpdateCompteComponent } from './comptes/update-compte/update-compte.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PrimengModule } from './primeng/primeng/primeng.module';
import { AddTransactionComponent } from './transactions/add-transaction/add-transaction.component';
import { UpdateTransactionComponent } from './transactions/update-transaction/update-transaction.component';
import { AddEntrepriseComponent } from './entreprises/add-entreprise/add-entreprise.component';
import { UpdateEntrepriseComponent } from './entreprises/update-entreprise/update-entreprise.component';
import { ListeComptesComponent } from './contacts/liste-comptes/liste-comptes.component';

const appRoutes : Routes = [
{path: 'contact', component:ContactsComponent},
{path: '', component:GestionsEntrepriseComponent},
{path: 'compte', component:ComptesComponent},
{path: 'transaction', component:TransactionsComponent},
{path: 'entreprise', component:EntreprisesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GestionsEntrepriseComponent,
    ComptesComponent,
    ContactsComponent,
    EntreprisesComponent,
    TransactionsComponent,
    AddContactComponent,
    UpdateContactComponent,
    AddCompteComponent,
    UpdateCompteComponent,
    AddTransactionComponent,
    UpdateTransactionComponent,
    AddEntrepriseComponent,
    UpdateEntrepriseComponent,
    ListeComptesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    CalendarModule,
    HttpClientModule,
    PrimengModule,
    MatDialogModule,
    DropdownModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
   RouterModule.forRoot(appRoutes)
  ],
  providers: [ManageserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
