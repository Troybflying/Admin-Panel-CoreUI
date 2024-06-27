import { Routes } from '@angular/router';

export const routes: Routes = [
    
{ 
        path: '',
        data: {
          title: 'Contact Us'
        },
        children: [
    {
        path: 'contactus',
        loadComponent: () => import('./contactus/contactus.component').then(m => m.ContactusComponent),
        data: {
          title: 'Contact US'
        }
    },
                ]
}
 
];
