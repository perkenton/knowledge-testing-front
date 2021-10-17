import { Component } from '@angular/core';
import { IsUserRegisteredService } from '../services/isUserRegistered.service';

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
  constructor(
    private readonly isUserRegisteredService: IsUserRegisteredService
  ) {}

  // TODO: сделать форму через FormBuilder с человеческой валидацией

  user: User = {
    surname: '',
    name: '',
    patronymic: '',
  };

  formSubmit() {
    console.log('name', this.user);
    this.isUserRegisteredService.setRegistered(true);
  }

}
