import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { ContactServiceService } from '../services/contact-service.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  @Input() contactListsfromDashboard: string[] = [];

  // contactListsfromService: string[] = [];
  // constructor(private contactService : ContactServiceService){}

  ngOnInit(): void {
      // this.contactService.contactNames$.subscribe((names) => {
      //   this.contactListsfromService = names;
      // })
  }

}
