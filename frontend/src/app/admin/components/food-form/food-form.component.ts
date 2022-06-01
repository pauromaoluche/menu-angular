import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Food } from 'src/app/Food';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss']
})
export class FoodFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Food>()
  @Input() btnText!: string

  foodForm!: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.foodForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
      group_id: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });
  }

  get name() {
    return this.foodForm.get('name')!;
  }
  get description() {
    return this.foodForm.get('description')!;
  }
  get value() {
    return this.foodForm.get('value')!;
  }
  get group_id() {
    return this.foodForm.get('group_id')!;
  }
  get image() {
    return this.foodForm.get('image')!;
  }

  fileChangeEvent(event: any) {
    const file: File = event.target.files[0];
    this.foodForm.patchValue({ image: file });
  }

  submit() {
    if (this.foodForm.invalid) {
      return;
    }
    console.log(this.foodForm.value)

    this.onSubmit.emit(this.foodForm.value);
  }

}
