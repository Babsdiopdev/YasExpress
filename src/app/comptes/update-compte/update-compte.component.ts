import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Compte } from 'src/app/compte.model';
import { ManageserviceService } from 'src/app/services/manageservice.service';

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.scss']
})
export class UpdateCompteComponent implements OnInit {
compte:Compte={};


  constructor(private manageService:ManageserviceService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.compte = this.data.compte;
  }
saveFormulaire(){
  alert('Compte modifier')
}
}
