import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { IProject } from './projects.interface';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  projects: IProject[] = null;
  projectName: string = null;

  constructor(
      protected projectsService: ProjectsService,
      protected navCtrl: NavController
  ) { }

  async ngOnInit() {
    this.projects = await this.projectsService.projects.toPromise();
  }

  async addProject() {

    if (this.projectName && this.projectName !== '') {
      const project: IProject = {
        projectName: this.projectName,
        relatedAssignmentsIds: [],
        projectToolName: ''
      };
      this.projects = await this.projectsService.addProject(project).toPromise();
      this.projectName = null;
    }
  }

  showProjectDetails(project: IProject): void {

  }

}
