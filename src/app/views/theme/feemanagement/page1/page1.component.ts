import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStyle } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';

import {
  RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent,
  CardBodyComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective,
  FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ColDirective,
  InputGroupComponent, InputGroupTextDirective, FormFeedbackComponent, ListGroupDirective,
  ListGroupItemDirective, FormFloatingDirective, GutterDirective,
  TableDirective,
  TableColorDirective,
  TableActiveDirective,
  AlignDirective,
  BorderDirective
} from '@coreui/angular';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [CommonModule, RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent,
    CardBodyComponent, FormControlDirective, ReactiveFormsModule, FormsModule,
    FormDirective, FormLabelDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective,
    FormCheckLabelDirective, ButtonDirective, ColDirective, InputGroupComponent, InputGroupTextDirective,
    FormFeedbackComponent, ListGroupDirective, ListGroupItemDirective,
    FormFloatingDirective, NgStyle, GutterDirective, TableDirective, TableColorDirective, TableActiveDirective,
     BorderDirective, AlignDirective],
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Page1Component implements OnInit {

  customStylesValidated = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;

  constructor() { }

  ngOnInit(): void { }

  onSubmit(feesubmit: NgForm) {
    this.customStylesValidated = true;
    console.log(feesubmit.value);

    if (feesubmit.valid) {
      alert("Fee Submit Successful!!");
    } else {
      alert("Form is invalid. Please fill out all required fields.");
    }
  }

  student = [
    {
      "addmission": '111',
      "name": "abc",
      "class": "6th",
      "roll": '14063',
      "session": '2024-2025',
      "father": "abc",
    }
  ];

  students = [
    {
      "Sno": '1',
      "type": "1st Installment",
      "lastdate": '01/05/2024',
      "DueAmount": '4900',
      "Fine": '100',
      "Balance": 5000,
      "checked": false
    },
    {
      "Sno": '2',
      "type": "2nd Installment",
      "lastdate": '01/07/2024',
      "DueAmount": '4500',
      "Fine": '100',
      "Balance": 4600,
      "checked": false
    },
    {
      "Sno": '3',
      "type": "3rd Installment",
      "lastdate": '01/10/2024',
      "DueAmount": '4500',
      "Fine": '100',
      "Balance": 4600,
      "checked": false
    },
    {
      "Sno": '4',
      "type": "4th Installment",
      "lastdate": '01/01/2025',
      "DueAmount": '4500',
      "Fine": '100',
      "Balance": 4600,
      "checked": false
    }
  ];
  
  textBoxValue: number = 0; // The numeric value to be displayed in the textbox
  checkedStates: boolean[] = new Array(this.students.length).fill(false); // Track the state of checkboxes

  onCheckboxChange(event: any, index: number): void {
    const isChecked = event.target.checked;
    for (let i = 0; i <= index; i++) {
      if (this.students[i].checked !== isChecked) {
        this.students[i].checked = isChecked;
        this.checkedStates[i] = isChecked;
        this.textBoxValue = isChecked ? this.textBoxValue + this.students[i].Balance : this.textBoxValue - this.students[i].Balance;
      }
    }
    // Adjust for the balance being added/removed multiple times
    if (!isChecked) {
      for (let i = index + 1; i < this.students.length; i++) {
        if (this.students[i].checked) {
          this.students[i].checked =false;
          this.checkedStates[i] = false;
          this.textBoxValue -= this.students[i].Balance;
        }
      }
    }
  }

  onTextBoxChange(value: string): void {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      this.textBoxValue = numericValue;
    }
  }
}
