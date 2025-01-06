import { Routes } from "@angular/router";
import { CountriesComponent } from "./pages/countries/countries.component";
import { CountryComponent } from "./pages/country/country.component";
import { HomeComponent } from "./pages/home/home.component";



export const RoutesCountry: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "",
                component: CountriesComponent
            },
            {
                path: ":id",
                component: CountryComponent
            },
            {
                path: "**",
                redirectTo: ""
            }
        ]
    }

]