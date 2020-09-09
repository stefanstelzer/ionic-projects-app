import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentsDetailPage } from './assignments-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AssignmentsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentsDetailPageRoutingModule {}
