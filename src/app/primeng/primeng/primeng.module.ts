import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService,MessageService } from 'primeng-lts/api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [


  ],
  providers: [ConfirmationService, MessageService]
})
export class PrimengModule { }
