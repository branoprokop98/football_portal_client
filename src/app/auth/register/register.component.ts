import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    form: FormGroup = new FormGroup({
        username: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
    });

    submitRegisterForm() {
        console.log(this.form.value.email)
        console.log(this.form.value.username)
        console.log(this.form.value.password)
    }
}
