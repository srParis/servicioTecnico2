import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {
  @Input() message: string;
  constructor() { }

  ngOnInit() {
  }

}
