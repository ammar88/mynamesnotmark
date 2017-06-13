import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './views/home.component'
import { WorkComponent } from './views/work.component'
import { JournalComponent } from './views/journal.component'
import { SingleWorkBHAComponent } from './views/single-work-bha.component'
import { SingleWorkDongComponent } from './views/single-work-dong.component'
import { SingleWorkImperialComponent } from './views/single-work-imperial.component'
import { SingleWorkInitionComponent } from './views/single-work-inition.component'
import { SingleWorkAquaterraComponent } from './views/single-work-aquaterra.component'
import { SingleWorkEdgeComponent } from './views/single-work-edge.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Web Developer ~ Ammar Idris' } },
  { path: 'work', component: WorkComponent, data: { title: 'Work' } },
  { path: 'work/bha', component: SingleWorkBHAComponent, data: { title: 'Work ~ BHA' } },
  { path: 'work/dong', component: SingleWorkDongComponent, data: { title: 'Work ~ Dong Energy UK' } },
  { path: 'work/imperial', component: SingleWorkImperialComponent, data: { title: 'Work ~ Imperial College London' } },
  { path: 'work/inition', component: SingleWorkInitionComponent, data: { title: 'Work ~ Inition' } },
  { path: 'work/aquaterra', component: SingleWorkAquaterraComponent, data: { title: 'Work ~ Aquaterra' } },
  { path: 'work/edge', component: SingleWorkEdgeComponent, data: { title: 'Work ~ Edge' } },
  { path: 'journal', component: JournalComponent, data: { title: 'Journal' } }
];

export const appRoutingProviders: any[] = []

export const routing = RouterModule.forRoot(appRoutes)
