import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.scss']
})
export class NewFoodComponent implements OnInit {
@Input() btnText!: string
  constructor() { }

  ngOnInit(): void {
  }

}
