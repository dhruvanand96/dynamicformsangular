import { Router } from '@angular/router';
import { FormArray } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-user-component',
  templateUrl: './create-user-component.component.html',
  styleUrls: ['./create-user-component.component.css']
})
export class CreateUserComponentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  userForm:FormGroup
  familyMembersList:FormArray




  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      userNameCtrl: ['', Validators.required],
      ageCtrl: ['', Validators.required],
      familyMembersList: this.formBuilder.array([this.createItem()])
     });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      familyMemberName: ['', Validators.required ],
      // tslint:disable-next-line:max-line-length
      familyMemberRole: ['', [Validators.required]]
    });
  }

  addItem(): void {
    this.familyMembersList = this.userForm.get('familyMembersList') as FormArray;
    this.familyMembersList.push(this.createItem());
  }
  removeItem(i): void {
    this.familyMembersList.removeAt(i);
  }

  userDataSubmit(formdata){

    console.log("formData",formdata);
    this.router.navigate(['view-user-component'])

  }

  warning() {

  }

}
