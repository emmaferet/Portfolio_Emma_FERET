import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'My Home Page' },
  // Déclarer une route classique, elle est chargée directement au lancement de l'app !!
  // { path: 'projects', component: ProjectsPage, title: 'My Projects Page', }
  {
    path: 'projects',
    // Déclarer une route lazy, elle n'est chargée que si elle est demandée par le user
    // .then permet de gerer l'assynchronisme, m d'extraire le component en "module"
    loadComponent: () =>
      import('./features/projects-page/projects-page').then((m) => m.ProjectsPage),
    title: 'My Projects Page',
  },
  {
    path: 'mystory',
    loadComponent: () =>
      import('./features/my-story-page/my-story-page').then((m) => m.MyStoryPage),
    title: 'My Projects Page',
  },
  {
    path: 'competences',
    loadComponent: () =>
      import('./features/my-skills-page/my-skills-page').then((m) => m.MySkillsPage),
    title: 'Compétences',
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact-page/contact-page').then((m) => m.ContactPage),
    title: 'Contact',
  },
  {
    // ** redirige vers toutes les pages non définies
    // tjrs mettre en bas de la liste de route, car il vérifie toutes les routes au dessus
    path: '**',
    loadComponent: () => import('./features/error-page/error-page').then((m) => m.ErrorPage),
    title: 'Error',
  },
];
