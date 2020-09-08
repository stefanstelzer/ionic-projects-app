import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects/projects.service';
import { IProject } from '../projects/projects.interface';
import { ActivatedRoute, Router } from '@angular/router';
import {NavController} from "@ionic/angular";


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.page.html',
  styleUrls: ['./project-detail.page.scss'],
})
export class ProjectDetailPage implements OnInit {

  project: IProject;
  protected readonly backButtonText: string = 'Projects';


  constructor(
      protected projectsService: ProjectsService,
      protected route: ActivatedRoute,
      protected router: Router,
      protected navCtrl: NavController
  ) {
  }

  async ngOnInit() {

    this.project = await this.projectsService
        .getProjectById(this.route.snapshot.paramMap.get('id'))
        .toPromise();
  }

  async updateProject(project: IProject) {

    await this.projectsService
        .updateProject(project)
        .toPromise();
    await this.navCtrl
        .navigateBack('projects');
  }
}
