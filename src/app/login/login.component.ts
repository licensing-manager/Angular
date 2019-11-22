import { Component, OnInit } from '@angular/core';
import { User } from '../Interfaces/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: User = {
    username: '',
    password:''
  };
  
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true; 
    console.log(this.model);
  }
}
