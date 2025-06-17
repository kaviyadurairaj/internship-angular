import { Component } from "@angular/core";
import { FormsModule,NgForm } from "@angular/forms";
import { RouterModule,Router } from "@angular/router";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
@Component({
    selector:'login',
    standalone:true,
    imports:[FormsModule,RouterModule,MatButtonModule,MatFormFieldModule,MatInputModule],
    templateUrl:'./login.component.html',
    styleUrl:'./login.component.css'
})
export class LoginComponent{
    Usename='';
    Email='';
    Password='';
    constructor(private route:Router){}
    loginacc(form:NgForm){
        if(form.valid){
            this.route.navigate(['/app-root']);
        }

    }
}