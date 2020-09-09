import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from './assignment.service';
import { IProject } from '../projects/projects.interface';
import { IDailyView } from './daily-view.interface';
import { ProjectsService } from '../projects/projects.service';
import * as moment from 'moment';
import { uuid4 } from '@capacitor/core/dist/esm/util';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.page.html',
  styleUrls: ['./assignments.page.scss'],
})
export class AssignmentsPage implements OnInit {

  projects: IProject[] = null;
  dailyViews: IDailyView[] = [];
  dailyView: IDailyView = {
    date: moment(new Date()).format('DD.MM.YYYY'),
    assignments: [],
    sum: 0,
    dailyViewId: uuid4()
  }
  bookedHours: number = 0;
  selectedProject: IProject = null;
  maxIndex: number = 0;
  actualIndex: number = 0;


  constructor(
      protected assignmentService: AssignmentsService,
      protected projectsService: ProjectsService
  ) {}

  async ngOnInit() {

    this.projects = await this.projectsService.projects.toPromise();
    this.dailyViews = await this.assignmentService.addDailyView(this.dailyView).toPromise();
    this.dailyView = this.dailyViews[this.dailyViews.length-1];
    this.maxIndex = this.dailyViews.length-1;
    this.actualIndex = this.maxIndex;
  }

  setProject($event) {

    this.selectedProject = <IProject>$event.target.value;
  }

  nextDailyView(): void {

    if (this.actualIndex < this.maxIndex) {
      this.actualIndex++;
      this.dailyView = this.dailyViews[this.actualIndex];
    } else {
      this.actualIndex = 0;
      this.dailyView = this.dailyViews[this.actualIndex];
    }
  }

  previousDailyView(): void {

    if (this.actualIndex > 0) {
      this.actualIndex--;
      this.dailyView = this.dailyViews[this.actualIndex]
    } else {
      this.actualIndex = this.maxIndex;
      this.dailyView = this.dailyViews[this.actualIndex];
    }
  }

  async addProjectAssignment() {

    if (this.selectedProject &&
        this.bookedHours !== 0
        && this.isProjectNotInAssignmentList(this.selectedProject)) {
      const assignment = {
        assignmentId: uuid4(),
        bookedHours: this.bookedHours,
        project: this.selectedProject
      }
      this.dailyView.sum += this.bookedHours;
      this.dailyView.assignments.push(assignment);
      await this.assignmentService.updateDailyView(this.dailyView).toPromise();
      this.selectedProject = null;
      this.bookedHours = 0;
    }
  }

  private isProjectNotInAssignmentList(project: IProject): boolean {

    let checkResults: boolean[] = [];

    this.dailyView.assignments.forEach((ass) => {
      checkResults.push(ass.project.projectId === project.projectId);
    });
    return checkResults.every((value: boolean) => {
      return value === false
    })
  }
}
