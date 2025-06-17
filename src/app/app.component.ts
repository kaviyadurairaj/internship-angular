import { Component,Renderer2 } from "@angular/core";
import {CommonModule, NgIf} from "@angular/common";
import {FormsModule,NgForm} from "@angular/forms";
import {RouterModule,Router} from "@angular/router";
import { EventService } from "./event.service";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector:'app-root',
  standalone:true,
  imports:[CommonModule,RouterModule,FormsModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatSlideToggleModule],
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent{
  heading="EVENT TRACKER";
  eventTitle='';
  eventDate='';
  istoggled=false;
  constructor(private router:Router,public event:EventService,private render:Renderer2){}
  addevent(form:NgForm){
    if(form.valid){
      this.event.addEvent(this.eventTitle,this.eventDate);
      form.reset();

    }
  }
  gotocalender(){
    this.router.navigate(['/calendar'])
  }
  pageTheme(){
    if(this.istoggled){
      document.body.classList.add('bg2');
      document.body.classList.remove('bg1');
    }
    else{
      document.body.classList.add('bg1');
      document.body.classList.remove('bg2');
    }
  }
  ngOnInit(){
    document.body.classList.add('bg1');
  }
}
