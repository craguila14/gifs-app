import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

interface MenuOptions {
    label: string;
    sublabel: string;
    route: string;
    icon: string;
}

@Component({
    selector: "gifs-side-menu-options",
    templateUrl: "./side-menu-options.component.html",
    imports: [RouterLink, RouterLinkActive],
})
export class SideMenuOptionsComponent {

    menuOptions: MenuOptions[] = [{
        icon: 'fa-solid fa-chart-line',
        label: 'Trending',
        sublabel: 'Gifs populares',
        route: '/dashboard/trending'
    },
    {
        icon: 'fa-solid fa-magnifying-glass',
        label: 'Buscador',
        sublabel: 'Buscar gifs',
        route: '/dashboard/search'
    }
    ]
    
}