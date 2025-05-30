import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard', 
        loadComponent: () => import('./gifs/pages/dashboard/dashboard-page.component'),
        children: [
             {
            path: 'search',
            loadComponent: () => import('./gifs/pages/search/search-page.component'),
        },
        {
            path: 'trending',
            loadComponent: () => import('./gifs/pages/trending/trending-page.component'),
        },
        {
            path: 'history/:query',
            loadComponent: () => import('./gifs/pages/gifs-history/gifs-history.component'),
        },
        {
            path: '**',
            redirectTo: 'trending',
        }

        ]
    },
   
    {
        path: '**',
        redirectTo: 'dashboard',
    }
];
