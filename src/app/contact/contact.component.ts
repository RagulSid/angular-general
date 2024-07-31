import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactServiceService } from '../services/contact-service.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactName: string = '';
  @Output() contactAdded = new EventEmitter<string>();

  constructor(private contactService: ContactServiceService){}

  onSubmit(){
    console.log(this.contactName);
    this.contactAdded.emit(this.contactName);

    //using service
    this.contactService.addContactName(this.contactName);

    this.contactName = '';
  }
}
