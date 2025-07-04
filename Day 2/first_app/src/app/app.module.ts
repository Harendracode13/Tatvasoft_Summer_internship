import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component'; // ✅ Correct import

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent   // ✅ Declare component here
  ],
  imports: [
    BrowserModule,
    FormsModule         // ✅ Required for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
