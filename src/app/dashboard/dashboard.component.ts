import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ContactComponent, ListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  contactLists: string[] = [];

  onContactAdded(contactName: string){
    console.log(contactName, "from app");
    this.contactLists.push(contactName);
  }
   
}
