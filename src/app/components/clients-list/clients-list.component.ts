import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientListItem } from "../../models/ClientListItem";
import { FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  item: ClientListItem = {
  firstname: '',
  lastname: '',
  email: '',
  age: 18,
  phone: '',
  comment: ''
  };
  clientList: ClientListItem[];
@ViewChild('form') form: NgForm;
  constructor() { }

  ngOnInit() {
    this.clientList = [
      {
        id: 0,
        firstname: 'Alex',
        lastname: 'Ivanov',
        email: 'alex77@gmail.com',
        age: 35,
        phone: '0963457654',
        comment: 'Some text Some text Some text Some text'
      },
      {
        id: 1,
        firstname: 'Ivan',
        lastname: 'Petrov',
        email: 'ivan8@gmail.com',
        age: 24,
        phone: '0961237654',
        comment: 'Some text Some text Some text Some text'
      },
      {
        id: 2,
        firstname: 'Katy',
        lastname: 'Brazhko',
        email: 'katy@gmail.com',
        age: 18,
        phone: '0673457612',
        comment: 'Some text Some text Some text Some text'
      }

    ];

  }
  onSubmit(form) {
    if (form.invalid) return;

    const newItem: ClientListItem = {
      firstname: this.item.firstname,
      lastname: this.item.lastname,
      email: this.item.email,
      age: this.item.age,
      phone: this.item.phone,
      comment: this.item.comment,
      id: this.clientList.length
    };
    this.clientList.push(newItem);
    this.form.resetForm();
  }

  deleteClient (id) {
    this.clientList.splice(id, 1);
  }
}
