import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { InvalidEmailModalComponent } from './contacts/shared/modals/invalid-email-modal/invalid-email-modal.component';
import { InvalidPhoneNumberModalComponent } from './contacts/shared/modals/invalid-phone-number-modal/invalid-phone-number-modal.component';
import { FavoriteIconDirective } from './contacts/shared/favorite-icon/favorite-icon.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactEditComponent,
    InvalidEmailModalComponent,
    InvalidPhoneNumberModalComponent,
    FavoriteIconDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
