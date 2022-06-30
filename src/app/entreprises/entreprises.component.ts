import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Entreprise } from '../entreprise.model';
import { ManageserviceService } from '../services/manageservice.service';
import { AddEntrepriseComponent } from './add-entreprise/add-entreprise.component';
import { Transaction } from '../transaction.model';
import { UpdateEntrepriseComponent } from './update-entreprise/update-entreprise.component';


@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.scss']
})
export class EntreprisesComponent implements OnInit {
public entreprises!: Entreprise[];
message:string ="suppression réussie";
entreprise: Entreprise = {

};
  constructor(private manageService:ManageserviceService,
    private router: Router,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getAllEntreprise();
  }

  public getAllEntreprise(): void {
this.manageService.getAllEntreprise().subscribe((response :Entreprise[]) =>
{
  this.entreprises = response
},
(error:HttpErrorResponse) =>
{alert(error.message);
}
);}
openEntreprise(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '720px';
  dialogConfig.height = '600';
  dialogConfig.backdropClass = 'bacdrop-modal';
  dialogConfig.disableClose = true;
  this.dialog.open(AddEntrepriseComponent, dialogConfig)
  .afterClosed().subscribe(
    result => {
      this.getAllEntreprise();}
  )
}
ModifierEntreprise(entreprise:Entreprise){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '720px';
  dialogConfig.height = '600';
  dialogConfig.backdropClass = 'bacdrop-modal';
  dialogConfig.disableClose = true;
  dialogConfig.data = {'entreprise':entreprise};
  this.dialog.open(UpdateEntrepriseComponent, dialogConfig);
}
deleteEntreprise(entreprise:Entreprise): void {
  this.manageService.deleteEntrepriseById(entreprise.id).subscribe(
   response =>{
    alert(this.message)
  },
   (error:HttpErrorResponse) =>{
     alert(error.message);
   })
  }
}
