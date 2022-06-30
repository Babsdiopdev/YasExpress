import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Compte } from 'src/app/compte.model';
import { Contact } from 'src/app/contact';
import { ManageserviceService } from 'src/app/services/manageservice.service';

@Component({
  selector: 'app-liste-comptes',
  templateUrl: './liste-comptes.component.html',
  styleUrls: ['./liste-comptes.component.scss']
})
export class ListeComptesComponent implements OnInit {
  contacts!:Contact[];

  public comptes!:Compte[];
id:any;
message:string ="suppression réussie";
//contacts!:Contact[];
compte:Compte ={};
contact =
 [
  {
  id: 0,
  nom: 'ERTY',
  prenom: 'SDFGHJ',
  civilite: '',
  telephone: 0,
  mobile: 0,
  adresse: '',
  email: '',
  site: '',
  type: '',
  fonction: ''
}];
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



}
