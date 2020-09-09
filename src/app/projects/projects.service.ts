import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { IProject } from './projects.interface';

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {

    private _projects: IProject[] = null;

    constructor() {
        this._projects = [{
            projectName: 'FM Mobile',
            projectId: uuidv4(),
            projectToolName: 'Java Script',
            relatedAssignmentsIds: []
        }, {
            projectName: 'ECO - Emergency Communicator',
            projectId: uuidv4(),
            projectToolName: 'Apache Cordova',
            relatedAssignmentsIds: []
        }, {
            projectName: 'LIDL Phonebook',
            projectId: uuidv4(),
            projectToolName: 'Angular',
            relatedAssignmentsIds: []
        }, {
            projectName: 'LIDL Checklisten',
            projectId: uuidv4(),
            projectToolName: 'Angular',
            relatedAssignmentsIds: []
        }]
    }

    get projects(): Observable<IProject[]> {

        return of(this._projects);
    }

    getProjectById(projectId: string): Observable<IProject> {

        return of(this._projects[this.getProjectIndex(projectId)]);
    }

    addProject(project: IProject): Observable<IProject[]> {

        project.projectId = uuidv4();
        this._projects.push(project);
        return of(this._projects);
    }

    updateProject(project: IProject): Observable<IProject> {

        const projectIndex = this.getProjectIndex(project.projectId);
        this._projects[projectIndex] = project;
        return of(this._projects[projectIndex]);
    }

    private getProjectIndex(projectId: string): number {

        return this._projects.findIndex(project => project.projectId === projectId);
    }
}
