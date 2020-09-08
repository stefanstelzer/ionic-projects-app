import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { IProject } from './projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  constructor(
      protected projectsService: ProjectsService
  ) { }

  ngOnInit() {
  }

}
