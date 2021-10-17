import { Component, OnInit } from '@angular/core';

// TODO: тип импортировать с бэка
export type User = {
  surname: string;
  name: string;
  patronymic: string;
}

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
  // interpolation: [ '{{', '}}' ],
})
export class UserRegistrationComponent {
  // TODO: сделать форму через FormBuilder

  user: User = {
    surname: '',
    name: '',
    patronymic: '',
  };

  formSubmit() {
    console.log('name', this.user);
  }

}
