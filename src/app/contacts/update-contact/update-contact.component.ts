import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from 'src/app/contact';
import { ManageserviceService } from 'src/app/services/manageservice.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {
//contact!:any;
//public contacts!: Contact[];


contact: Contact = {
  id: 0,
  nom: '',
  prenom: '',
  civilite: '',
  telephone: 0,
  mobile: 0,
  adresse: '',
  email: '',
  site: '',
  type: '',
  fonction: ''
};
  constructor(private manageService:ManageserviceService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.contact = this.data.contact;
  }
  public onModifContact(contact:Contact): void{
    document.getElementById('addContact')?.click();
 this.manageService.saveContact(this.contact).subscribe(
   (response:Contact) =>{
     console.log(response);
 },
   (error:HttpErrorResponse) =>{
     alert(error.message);
     //contact.reset();
   }
 );
 }

 /*
  this.contact= this.getContact(); dans ngOnInit()
  getContact() {
    let data = localStorage.getItem('contact');
    if (data != null) {
      data = JSON.parse(data);
    }
    return data;
}*/
/*
public onUpdateContact(contact: Contact): void{
this.manageService.updateContact(contact).subscribe(
 (response:Contact) =>{
   console.log(response);
},
 (error:HttpErrorResponse) =>{
   alert(error.message);
 }
);
}
*/
}
