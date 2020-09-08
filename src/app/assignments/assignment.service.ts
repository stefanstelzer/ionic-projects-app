import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { IDailyView } from './daily-view.interface';
import {uuid4} from "@capacitor/core/dist/esm/util";

@Injectable({
    providedIn: 'root',
})
export class AssignmentsService {

    private _dailyViews: IDailyView[] = null;

    constructor() {

        this._dailyViews = [
            {
                dailyViewId: uuid4(),
                date: new Date(),
                assignments: [
                    {
                        bookedHours: 3,
                        project: {
                            projectName: 'FM Mobile',
                            projectId: uuidv4(),
                            projectToolName: 'Java Script',
                            relatedAssignmentsIds: []
                        }
                    }
                ]
            },
            {
                dailyViewId: uuid4(),
                date: new Date(),
                assignments: [
                    {
                        bookedHours: 3,
                        project: {
                            projectName: 'ECO - Emergency Communicator',
                            projectId: uuidv4(),
                            projectToolName: 'Java Script',
                            relatedAssignmentsIds: []
                        }
                    }
                ]
            },
        ];
    }

    get dailyViews(): Observable<IDailyView[]> {

        return of(this._dailyViews);
    }
    /*
    getProjectById(projectId: string): Observable<IProject> {

        return of(this._projects[this.getProjectIndex(projectId)]);
    }
    */

    addDailyView(dailyView: IDailyView): Observable<IDailyView[]> {

        dailyView.dailyViewId = uuidv4();
        this._dailyViews.push(dailyView);
        return of(this._dailyViews);
    }
    /*
    updateProject(project: IProject): Observable<IProject> {

        return of(this._projects[this.getProjectIndex(project.projectId)]);
    }

    */

    private getDailyViewIndex(dailyViewId: string): number {

        return this._dailyViews.findIndex(dailyView => dailyView.dailyViewId === dailyViewId);
    }
}
