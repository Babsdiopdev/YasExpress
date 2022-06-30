import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Compte } from '../compte.model';
import { ManageserviceService } from '../services/manageservice.service';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { UpdateCompteComponent } from './update-compte/update-compte.component';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.scss']
})
export class ComptesComponent implements OnInit {

  public comptes!:Compte[];
id:any;
message:string ="suppression réussie";
//contacts!:Contact[];
compte:Compte ={};

  constructor(
    private manageService:ManageserviceService,private router: Router,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getAllCompte();
  }
public getAllCompte():void{
  this.manageService.getAllCompte().subscribe((response :Compte[]) =>
  {
    this.comptes = response;
  },
  (error:HttpErrorResponse) =>
  {
    alert(error.message);
  });
}

openNew(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '720px';
  dialogConfig.height = '600';
  dialogConfig.backdropClass = 'bacdrop-modal';
  dialogConfig.disableClose = true;
  this.dialog.open(AddCompteComponent, dialogConfig);
}
deleteCompte(compte:Compte): void{
  this.manageService.deleteCompteById(compte.id!).subscribe(
   response =>{
    alert(this.message)
  },
   (error:HttpErrorResponse) =>{
     alert(error.message);
   })
  }

ModifierCompte(compte:Compte){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '720px';
  dialogConfig.height = '600';
  dialogConfig.backdropClass = 'bacdrop-modal';
  dialogConfig.disableClose = true;
  dialogConfig.data = {'compte':compte};
  this.dialog.open(UpdateCompteComponent, dialogConfig);

}
}
