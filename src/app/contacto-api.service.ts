import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoApiService {
  readonly APIurl = "https://localhost:7201/api";

  constructor(private http:HttpClient) { }

  getContactList():Observable<any[]>{
    return this.http.get<any>(this.APIurl + '/contactos');
  }

  addContact(data:any){
    return this.http.post(this.APIurl + '/contactos', data);
  }

  updateContact(id:number|string, data:any){
    return this.http.put(this.APIurl + `/contactos/${id}`, data);
  }

  deleteContact(id:number|string){
    return this.http.delete(this.APIurl + `/contactos/${id}`);
  }
}
