import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'object-detection',
        pathMatch: 'full'
    },
    {
        path: 'object-detection',
        loadChildren: () => import('./pages/object-detection/detection.routes')
    }
];
