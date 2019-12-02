import { Component, OnInit } from '@angular/core';
import { User } from '../Interfaces/user';
import { HttpClient } from '@angular/common/http';


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

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true; 
    console.log(this.model);
    this.http.post('http://localhost:3000/api/users/login', this.model)
      .subscribe(response => {console.log(response)});
  }
}
