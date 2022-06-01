import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Food } from 'src/app/Food';
import { FoodService } from 'src/app/services/food.service';
@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.scss']
})
export class NewFoodComponent implements OnInit {
  btnText = 'Salvar';

  foodForm!: FormGroup
  constructor(private foodService: FoodService) { }

  ngOnInit(): void { }

 async createHandler(food: Food){
    const formData= new FormData()

    formData.append('name', food.name);
    formData.append('description', food.description);
    formData.append('value', food.value);
    formData.append('group_id', food.group_id);

    if(food.image){
      formData.append('image', food.image);
    }

    await this.foodService.createFood(formData).subscribe();
    
  }

}
