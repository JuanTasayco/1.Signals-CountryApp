import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "countries",
        loadChildren: () => import("./countryApp/country.routes").then((feature) => feature.RoutesCountry)
    },
    {
        path: "**",
        redirectTo: "countries",
    }
];
