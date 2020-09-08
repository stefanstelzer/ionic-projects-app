import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from './assignment.service';
import { IProject } from '../projects/projects.interface';
import { IDailyView } from './daily-view.interface';
import { ProjectsService } from '../projects/projects.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.page.html',
  styleUrls: ['./assignments.page.scss'],
})
export class AssignmentsPage implements OnInit {

  projects: IProject[] = null;
  dailyViews: IDailyView[] = null;
  dailyView: IDailyView = {
    date: new Date(),
    assignments: [],
    sum: 0
  }
  bookedHours: number = 0;
  selectedProject: IProject = null;


  constructor(
      protected assignmentService: AssignmentsService,
      protected projectsService: ProjectsService
  ) {}

  async ngOnInit() {

    this.projects = await this.projectsService.projects.toPromise();
    this.dailyViews = await this.assignmentService.dailyViews.toPromise();
  }

  setProject($event) {

    this.selectedProject = <IProject>$event.target.value;
  }

  async addProjectAssignment() {

    if (this.selectedProject &&
        this.bookedHours !== 0
        && this.isProjectNotInAssignmentList(this.selectedProject)) {
      const assignment = {
        bookedHours: this.bookedHours,
        project: this.selectedProject
      }
      this.dailyView.sum += this.bookedHours;
      this.dailyView.assignments.push(assignment);
      this.selectedProject = null;
      this.bookedHours = 0;
    }
  }

  private isProjectNotInAssignmentList(project: IProject): boolean {

    let checkResults: boolean[] = [];

    this.dailyView.assignments.forEach((ass) => {
      checkResults.push(ass.project.projectId === project.projectId);
    });
    return checkResults.every((value) => {
      return value === false
    })
  }
}
