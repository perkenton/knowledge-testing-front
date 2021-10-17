import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { TestFormComponent } from './test-form/test-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localeRu, 'ru');


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
