import { Component, inject, computed } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { GifService } from "../../services/gifs.service";
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
    selector: 'app-gif-history',
    imports: [GifListComponent],
    templateUrl: './gifs-history.component.html',
})

export default class GifsHistoryComponent {

    gifsService = inject(GifService)

    query = toSignal(
        inject(ActivatedRoute).params.pipe(
            map(params => params['query'])
    ))

    gifsByKey = computed(() => {
        return this.gifsService.getHistoryGifs(this.query())
    })

}