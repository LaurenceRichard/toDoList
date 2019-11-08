import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoList';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCBanlox3w06RPLym_95eaW2KybJ8shti4",
      authDomain: "todolist-73bfd.firebaseapp.com",
      databaseURL: "https://todolist-73bfd.firebaseio.com",
      projectId: "todolist-73bfd",
      storageBucket: "todolist-73bfd.appspot.com",
      messagingSenderId: "493726617287",
      appId: "1:493726617287:web:73cebb860e5575b35578e2"
    };
    firebase.initializeApp(firebaseConfig);
  }

}
