import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectsDetailPageRoutingModule } from './projects-detail.routing.module';
import { ProjectsDetailComponent } from './projects-detail.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProjectsDetailPageRoutingModule
    ],
    declarations: [ProjectsDetailComponent]
})
export class ProjectsDetailPageModule {}
