import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Compte } from 'src/app/compte.model';
import { ManageserviceService } from 'src/app/services/manageservice.service';

@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.scss']
})
export class AddCompteComponent implements OnInit {

  constructor(private manageService:ManageserviceService) { }

  ngOnInit(): void {
  }
public onAddCompte(addForm: NgForm):void {
  document.getElementById('addCompte')?.click();
this.manageService.saveCompte(addForm.value).subscribe(
  (response:Compte) =>{
    console.log(response);
  },
  (error:HttpErrorResponse) =>{
    alert (error.message);
  }
)
}
}
