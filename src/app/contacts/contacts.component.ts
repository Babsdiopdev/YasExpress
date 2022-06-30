import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ManageserviceService } from '../services/manageservice.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ListeComptesComponent } from './liste-comptes/liste-comptes.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  id:any;
  message:string ="suppression réussie";
   contacts!:Contact[];
   contact: Contact = {
     id: 0,
     nom: '',
     prenom: 'Pathé',
     civilite: '',
     telephone: 0,
     mobile: 0,
     adresse: '',
     email: '',
     site: '',
     type: '',
     fonction: ''
   };
 closeDialog: string = 'non';
 //contact: any;
   constructor(
    private manageService:ManageserviceService,
    private router: Router,
    private dialog: MatDialog,
) { }

  ngOnInit(): void {
    this.getAllClient();
    //this.contacts= this.manageService.getAllClient()
  }

  public getAllClient():void {
    this.manageService.getAllClient().subscribe({
           next: (response: Contact[]) =>{
                 this.contacts = response;
                      },
           error:(error:HttpErrorResponse) =>{
                 alert(error.message);
                       }
    } );
  }
  openNew(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '720px';
    dialogConfig.height = '600';
    dialogConfig.backdropClass = 'bacdrop-modal';
    dialogConfig.disableClose = true;
    this.dialog.open(AddContactComponent, dialogConfig)
    .afterClosed().subscribe(
      result => {
        this.getAllClient();}
    )

  }
  ModifierContact(contact:Contact){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '720px';
    dialogConfig.height = '600';
    dialogConfig.backdropClass = 'bacdrop-modal';
    dialogConfig.disableClose = true;
    dialogConfig.data = {'contact':contact};
    this.dialog.open(UpdateContactComponent, dialogConfig);
  }

 /* deleteContact(contact: Contact) {
    this.confirmationService.confirm({
        message: 'Êtes vous sûr de vouloir supprimer  le devis de ' + contact.nom + '?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.contacts = this.contacts.filter(val => val.id !== contact.id);
            //this.contact = {};
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Devis de  ' + contact.nom  +  '   supprimé avec success', life: 3000});
        }
    });
  }*/

 deleteContact(contact: Contact): void{
 this.manageService.deleteContactById(contact.id).subscribe(
 response =>{
  alert(this.message)
},
 (error:HttpErrorResponse) =>{
   alert(error.message);
 })
}

listeComptes(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '720px';
  dialogConfig.height = '600';
  dialogConfig.backdropClass = 'bacdrop-modal';
  dialogConfig.disableClose = true;
  this.dialog.open(ListeComptesComponent, dialogConfig)
  .afterClosed().subscribe(
    result => {
      this.getAllClient();}
  )
}


/*
(click)="onOpenModal(null!, 'add')"
  public onOpenModal(contact:Contact, mode:string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle','modal');
    if(mode ==='add'){
      button.setAttribute('data-bs-target','#addContactModal');
    }
    if(mode ==='edit'){
      button.setAttribute('data-bs-target','#editContactModal');
    }
    if(mode ==='delete'){
      button.setAttribute('data-bs-target=','#deleteContactModal');
    }
    container!.appendChild(button);
    button.click();
  }
  openModal(){
     alert('modal ouvert');
  }
  */
}
function AddConctactComponent(AddConctactComponent: any, dialogConfig: MatDialogConfig<any>) {
  throw new Error('Function not implemented.');
}

function UpdateConctactComponent(UpdateConctactComponent: any, dialogConfig: MatDialogConfig<any>) {
  throw new Error('Function not implemented.');
}

