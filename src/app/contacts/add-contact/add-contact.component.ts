import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SelectItem, SelectItemGroup } from 'primeng/api';
import { Contact } from 'src/app/contact';
import { ManageserviceService } from 'src/app/services/manageservice.service';

interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

constructor(private manageService:ManageserviceService) {

  }

ngOnInit(): void {
  //throw new Error('Method not implemented.');

}

 public onAddContact(addForm: NgForm): void{
   document.getElementById('addContact')?.click();
this.manageService.saveContact(addForm.value).subscribe(
  (response:Contact) =>{
    console.log(response);
},
  (error:HttpErrorResponse) =>{
    alert(error.message);
  }
);
}
}
