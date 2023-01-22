import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.scss'],
})
export class CollectComponent {

  @Input() name?: string;

}
