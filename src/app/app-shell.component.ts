import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
@Component({
    selector:'app-shell',
    standalone:true,
    imports:[RouterModule],
    template:`
     <!-- This is where routed components like AppComponent and CalendarComponent will appear -->
    <router-outlet></router-outlet>
    `
})
export class AppShellComponent{}