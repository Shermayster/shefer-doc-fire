import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAQQff-MZsxqEPQBuuGXZj8D6xneUNufzM',
  authDomain: 'shefer-51fd0.firebaseapp.com',
  databaseURL: 'https://shefer-51fd0.firebaseio.com',
  storageBucket: 'shefer-51fd0.appspot.com',
  messagingSenderId: '414357342129'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
