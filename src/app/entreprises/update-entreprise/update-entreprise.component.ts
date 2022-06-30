import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManageserviceService } from 'src/app/services/manageservice.service';
import { Entreprise } from '../../entreprise.model';

@Component({
  selector: 'app-update-entreprise',
  templateUrl: './update-entreprise.component.html',
  styleUrls: ['./update-entreprise.component.scss']
})
export class UpdateEntrepriseComponent implements OnInit {

  entreprise: Entreprise = {
};
  constructor(private manageService:ManageserviceService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.entreprise= this.data.entreprise;
  }
  saveFormulaire(){
    alert('Compte modifier')
  }
}
