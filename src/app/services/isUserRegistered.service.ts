import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsUserRegisteredService {
  public isUserRegistered$ = new Subject<boolean>();

  public setRegistered(isUserRegistered: boolean) {
    this.isUserRegistered$.next(isUserRegistered);
  }
}
