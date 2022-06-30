import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ManageserviceService } from '../services/manageservice.service';
import { Transaction } from '../transaction.model';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { UpdateTransactionComponent } from './update-transaction/update-transaction.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
transactions!:Transaction[];
id:any;
message:string ="suppression réussie";


  constructor(private manageService:ManageserviceService,private router: Router,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getAllTransaction();
  }
public getAllTransaction():void{
  this.manageService.getAllTransaction().subscribe((response:Transaction[]) =>
  {
    this.transactions = response;
  },
  (error:HttpErrorResponse) =>
  {
      alert(error.message);
  }
  )
}
openTransaction(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '720px';
  dialogConfig.height = '600';
  dialogConfig.backdropClass = 'bacdrop-modal';
  dialogConfig.disableClose = true;
  this.dialog.open(AddTransactionComponent, dialogConfig).afterClosed().subscribe(
    result => {
      this.getAllTransaction();}
  )
}
ModifierTransaction(transaction:Transaction):void {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '720px';
  dialogConfig.height = '600';
  dialogConfig.backdropClass = 'bacdrop-modal';
  dialogConfig.disableClose = true;
  dialogConfig.data = {'transaction':transaction};
  this.dialog.open(UpdateTransactionComponent, dialogConfig);
}

deleteTransaction(transaction: Transaction): void {
  this.manageService.deleteTransactionById(transaction.id!).subscribe(
   response =>{
    alert(this.message)
  },
   (error:HttpErrorResponse) =>{
     alert(error.message);
   })
  }
}
