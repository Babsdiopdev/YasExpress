import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Contact } from '../contact';
import { Compte } from '../compte.model';
import { Transaction } from '../transaction.model';
import { Entreprise } from '../entreprise.model';
@Injectable({
  providedIn: 'root'
})
export class ManageserviceService {
 host:string = environment.baseUrl
  constructor(private httpClient:HttpClient) { }

    getAllClient(): Observable<Contact[]>{
      return this.httpClient.get<Contact[]>(this.host+"contacts");
    }
   saveContact(contact:Contact): Observable<Contact>{
      return this.httpClient.post<Contact>
      (this.host+"contact", contact);
    }

    updateContact(contact:Contact): Observable<Contact>{
      return this.httpClient.put<Contact>
      (this.host+"contact", contact);
    }

    deleteContactById(Id:number): Observable<void>{
  return this.httpClient.delete<void>(this.host+"contact/"+Id);}
    //declarations de compte
    getAllCompte(): Observable<Compte[]>{
      return this.httpClient.get<Compte[]>(this.host+"comptes");
    }

    deleteCompteById(Id:number): Observable<void>{
      return this.httpClient.delete<void>(this.host+"compte/"+Id);
    }
    saveCompte(compte:Compte): Observable<Compte>{
      return this.httpClient.post<Compte>
      (this.host+"compte", compte);
    }
//declarations de transaction
getAllTransaction():Observable<Transaction[]>{
  return this.httpClient.get<Transaction[]>(this.host+"transactions");
}
deleteTransactionById(Id:number): Observable<void>{
  return this.httpClient.delete<void>(this.host+"transaction/"+Id);
}
saveTransaction(transaction:Transaction): Observable<Transaction>{
  return this.httpClient.post<Transaction>
  (this.host+"transaction", transaction);
}

//declarations de entreprise
getAllEntreprise():Observable<Entreprise[]>{
  return this.httpClient.get<Entreprise[]>(this.host+"entreprises")
}
saveEntreprise(entreprise:Entreprise):Observable<Entreprise>{
  return this.httpClient.post<Entreprise>
  (this.host+"entreprise", entreprise);
}
deleteEntrepriseById(Id:any): Observable<void>{
  return this.httpClient.delete<void>(this.host+"entreprise/"+Id);
}
}
