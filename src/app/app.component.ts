import { Component } from '@angular/core';
import { IsUserRegisteredService } from './services/isUserRegistered.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly isUserRegisteredService: IsUserRegisteredService
  ) {}

  isRegistered: boolean = false;
  setIsRegistered = this.isUserRegisteredService.isUserRegistered$.subscribe((value) => this.isRegistered = value);

}
