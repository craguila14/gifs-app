import { Injectable, inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import type { GiphyResponse } from "../interfaces/giphy-interfaces";
import type { Gif } from "../interfaces/gif-interface";
import { GifMapper } from "../mapper/gif-mapper";
import { map } from "rxjs";

@Injectable({providedIn: "root"})
    export class GifService {

        private http = inject(HttpClient);

        trendingGifs = signal<Gif[]>([])
        trendingGifsLoading = signal<boolean>(true)

        constructor() {
            this.loadTrendingGifs()
        }
    
        loadTrendingGifs(){
            this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
                params: {
                    api_key: environment.giphyApiKey,
                    limit: "20",
                   
                }
            }).subscribe((resp) => {
                const gifs = GifMapper.mapGiphyItemToGifArray(resp.data)
                this.trendingGifs.set(gifs)
                this.trendingGifsLoading.set(false)
            })
        }

        searchGifs(query: string) {
           return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`,{
                params: {
                    api_key: environment.giphyApiKey,
                    limit: "20",
                    q: query,
                }
            })
                .pipe (
                    map(({data}) => data),
                    map((items) => GifMapper.mapGiphyItemToGifArray(items) )
            )
            // .subscribe((resp) => {
            //     const gifs = GifMapper.mapGiphyItemToGifArray(resp.data)
            //    console.log('search:', gifs)
            // })
        }
    }