import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignmentsDetailPageRoutingModule } from './assignments-detail-routing.module';

import { AssignmentsDetailPage } from './assignments-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignmentsDetailPageRoutingModule
  ],
  declarations: [AssignmentsDetailPage]
})
export class AssignmentsDetailPageModule {}
