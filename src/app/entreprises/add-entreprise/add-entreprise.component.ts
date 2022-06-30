import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManageserviceService } from 'src/app/services/manageservice.service';
import { Transaction } from 'src/app/transaction.model';

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.component.html',
  styleUrls: ['./add-entreprise.component.scss']
})
export class AddEntrepriseComponent implements OnInit {

  constructor(private manageService:ManageserviceService) { }

  ngOnInit(): void {
  }
  public onAddTransaction(addForm: NgForm):void {
    document.getElementById('addCompte')?.click();
  this.manageService.saveEntreprise(addForm.value).subscribe(
    (response:Transaction) =>{
      console.log(response);
    },
    (error:HttpErrorResponse) =>{
      alert (error.message);
    }
  )
  }
}
