import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { WeekDay } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private http: HttpClient) {
    
   }


  getData(){
    return this.http.get("https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts");
  }
}
