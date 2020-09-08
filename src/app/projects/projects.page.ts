import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { IProject } from './projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  projects: IProject[] = null;

  constructor(
      protected projectsService: ProjectsService
  ) { }

  async ngOnInit() {
    this.projects = await this.projectsService.projects.toPromise();
  }

  

}
