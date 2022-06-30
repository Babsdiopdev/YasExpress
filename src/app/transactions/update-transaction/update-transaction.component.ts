import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManageserviceService } from 'src/app/services/manageservice.service';
import { Transaction } from 'src/app/transaction.model';

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.scss']
})
export class UpdateTransactionComponent implements OnInit {
  transaction:Transaction={};


  constructor(private manageService:ManageserviceService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit(): void {
    this.transaction= this.data.transaction;
         }
saveFormulaire(){
  alert('Transaction modifier')
}
}
