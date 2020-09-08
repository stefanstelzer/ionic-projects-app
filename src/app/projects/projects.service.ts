import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { v4 as uuid } from 'uuid';
import { IProject } from './projects.interface';

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {

    private _projects: IProject[] = null;

    constructor() {
        this._projects = [{
            projectName: 'FM Mobile',
            projectId: uuid.v4(),
            projectToolName: 'Java Script',
            relatedAssignmentsIds: []
        }, {
            projectName: 'ECO - Emergency Communicator',
            projectId: uuid.v4(),
            projectToolName: 'Apache Cordova',
            relatedAssignmentsIds: []
        }, {
            projectName: 'LIDL Phonebook',
            projectId: uuid.v4(),
            projectToolName: 'Angular',
            relatedAssignmentsIds: []
        }, {
            projectName: 'LIDL Checklisten',
            projectId: uuid.v4(),
            projectToolName: 'Angular',
            relatedAssignmentsIds: []
        }]
    }

    get projects(): Observable<IProject[]> {
        return of(this._projects);
    }

    addProject(project: IProject): Observable<IProject> {
        project.projectId = uuid.v4();
        this._projects.push(project);
        return of(project);
    }

    updateProject(project: IProject): Observable<IProject> {
        // TODO 1. serach for project index, 2. update project in index, 3. return updated project as Promise
        return of(project);
    }

    private getProjectIndex(project: IProject): number {

        return  this._projects.findIndex(project => project.projectId === project.projectId);
    }

}