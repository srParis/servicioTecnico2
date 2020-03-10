import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifyadmin',
  templateUrl: './notifyadmin.component.html',
  styleUrls: ['./notifyadmin.component.scss']
})
export class NotifyadminComponent implements OnInit {
  @Input() message: string;
  constructor() { }

  ngOnInit() {
  }

}
