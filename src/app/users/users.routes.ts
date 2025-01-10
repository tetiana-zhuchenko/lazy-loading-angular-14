import { Routes } from '@angular/router';

import { TasksComponent, resolveUserTasks } from '../tasks/tasks.component';
import {
  NewTaskComponent,
  canLeaveEditPage,
} from '../tasks/new-task/new-task.component';
import { Type } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks', // <your-domain>/users/<uid>/tasks
    loadComponent: () => {
      return import('../tasks/tasks.component').then(
        (mod) => mod.TasksComponent
      );
    },
    runGuardsAndResolvers: 'always',
    resolve: {
      userTasks: resolveUserTasks,
    },
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate: [canLeaveEditPage],
  },
];
