import { Component, inject, signal } from "@angular/core";
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from "../../services/gifs.service";
import type { Gif } from "../../interfaces/gif-interface";

@Component({
    selector: "app-search-page",
    templateUrl: "./search-page.component.html",
    imports: [GifListComponent],
})
export default class SearchPageComponent {

    gifService = inject(GifService)

    gifs = signal<Gif[]>([])

    onSearch (query: string) {
        this.gifService.searchGifs(query)
            .subscribe(resp => {
                this.gifs.set(resp)
            });
    }
}