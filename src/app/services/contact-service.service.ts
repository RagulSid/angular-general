import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor() { }

  //Below is a BehaviorSubject object - we saying that subject is going to be a string array and its starting value is empty array
  private contactNameSubject = new BehaviorSubject<string[]>([])
  contactNames$ = this.contactNameSubject.asObservable();
  //Above is a observable from the subject contactNameSubject

  addContactName(name: string){
    const currentNames = this.contactNameSubject.getValue();
    const updatedNames = [...currentNames, name];
    this.contactNameSubject.next(updatedNames);
  }
}
