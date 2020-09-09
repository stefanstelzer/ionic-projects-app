import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../assignments/assignment.service';
import {ActivatedRoute, Router} from "@angular/router";
import { NavController } from '@ionic/angular';
import {IDailyView} from "../assignments/daily-view.interface";
import { IProject } from '../projects/projects.interface';

@Component({
  selector: 'app-assignments-detail',
  templateUrl: './assignments-detail.page.html',
  styleUrls: ['./assignments-detail.page.scss'],
})
export class AssignmentsDetailPage implements OnInit {

  protected readonly backButtonText: string = 'Daily Views';
  assignment = null;
  dailyView: IDailyView = null;
  projects: IProject[] = [];
  assId: string;
  dailyViewId: string;

  constructor(
      protected assService: AssignmentsService,
      protected route: ActivatedRoute,
      protected router: Router,
      protected navCtrl: NavController
  ) { }

  async ngOnInit() {

    this.assId = this.route.snapshot.paramMap.get('assignmentId')
    this.dailyViewId = this.route.snapshot.paramMap.get('dailyViewId');

    this.dailyView = await this.assService.getDailyViewById(this.dailyViewId).toPromise();
    this.assignment = this.dailyView.assignments.find((ass) => {
      return ass.assignmentId === this.assId
    });
  }

  async updateAssignment(assignment) {

    this.dailyView.sum = 0;
    this.dailyView.assignments.forEach((ass) => {
      this.dailyView.sum += ass.bookedHours;
    })

    await this.assService.updateDailyView(this.dailyView);
    await this.navCtrl.navigateBack('daily-view')
  }

  async deleteAssignment(assignment) {

    let assIndex = this.dailyView.assignments.findIndex((ass) => {
      return ass.assignmentId === assignment.assignmentId
    })
    this.dailyView.sum = 0;
    this.dailyView.assignments.splice(assIndex, 1);
    this.dailyView.assignments.forEach((ass) => {
      this.dailyView.sum += ass.bookedHours;
    });
    await this.assService.updateDailyView(this.dailyView);
    await this.navCtrl.navigateBack('daily-view');
  }
}
