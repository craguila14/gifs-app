import { Component } from "@angular/core";
import { environment } from "../../../environments/environment";

@Component({
    selector: "gifs-side-menu-header",
    templateUrl: "./side-menu-header.component.html",
    imports: [],
})
export class SideMenuHeaderComponent {

    envs = environment
    
}