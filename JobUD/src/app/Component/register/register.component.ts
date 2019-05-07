import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerUser(event){
    event.preventdefault()
    const target = event.target
    const username = target.querySelector('#email').value
    const name = target.querySelector('#name').value
    const last_name = target.querySelector('#last_name').value
    const password = target.querySelector('#password').value
    const password2 = target.querySelector('#password2').value

    if (password != password2){
      
    }
  }

}
