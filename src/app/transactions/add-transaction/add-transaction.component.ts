import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManageserviceService } from 'src/app/services/manageservice.service';
import { Transaction } from 'src/app/transaction.model';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {

  constructor(private manageService:ManageserviceService) { }

  ngOnInit(): void {
  }
  public onAddCompte(addForm: NgForm):void {
    document.getElementById('addCompte')?.click();
  this.manageService.saveTransaction(addForm.value).subscribe(
    (response:Transaction) =>{
      console.log(response);
    },
    (error:HttpErrorResponse) =>{
      alert (error.message);
    }
  )
  }
}
