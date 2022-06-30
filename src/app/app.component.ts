import { Component, OnInit } from '@angular/core';
import { ManageserviceService } from './services/manageservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'webBackErp';
  value?: Date;
  contact: any[]= [];

  display: boolean = false;
  constructor(private manageService:ManageserviceService){}


  ngOnInit():void{
    this.getAllContact();
  }

  getAllContact(){
    this.manageService.getAllClient().subscribe((data) =>{
      this.contact = data;
    })
  }

}
