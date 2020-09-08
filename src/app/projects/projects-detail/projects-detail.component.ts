import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'projects-detail',
    templateUrl: './projects-detail.component.html',
    styleUrls: ['./projects-detail.component'],
})
export class ProjectsDetailComponent implements OnInit {

    projectId: string;

    constructor(
        protected http: HttpClient,
        protected route: ActivatedRoute
    ) {
        this.projectId = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        console.log('---projectID---', this.projectId);
    }
}