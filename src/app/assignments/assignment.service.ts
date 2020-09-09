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
                date: '06.09.2020',
                assignments: [
                    {
                        bookedHours: 3,
                        project: {
                            projectName: 'FM Mobile',
                            projectId: uuidv4(),
                            projectToolName: 'Java Script',
                            relatedAssignmentsIds: []
                        }
                    }, {
                    bookedHours: 2,
                        project: {
                            projectName: 'LIDL Phonebook',
                            projectId: uuidv4(),
                            projectToolName: 'Angular',
                            relatedAssignmentsIds: []
                        }
                    }
                ],
                sum: 5
            },
            {
                dailyViewId: uuid4(),
                date: '07.09.2020',
                assignments: [
                    {
                        bookedHours: 3,
                        project: {
                            projectName: 'ECO - Emergency Communicator',
                            projectId: uuidv4(),
                            projectToolName: 'Java Script',
                            relatedAssignmentsIds: []
                        }
                    }, {
                        bookedHours: 5,
                        project: {
                            projectName: 'FM Mobile',
                            projectId: uuidv4(),
                            projectToolName: 'Java Script',
                            relatedAssignmentsIds: []
                        }
                    }
                ],
                sum: 8
            },
            {
                dailyViewId: uuid4(),
                date: '08.09.2020',
                assignments: [
                    {
                        bookedHours: 3,
                        project: {
                            projectName: 'FM Mobile',
                            projectId: uuidv4(),
                            projectToolName: 'Java Script',
                            relatedAssignmentsIds: []
                        }
                    }, {
                        bookedHours: 2,
                        project: {
                            projectName: 'LIDL Phonebook',
                            projectId: uuidv4(),
                            projectToolName: 'Angular',
                            relatedAssignmentsIds: []
                        }
                    }
                ],
                sum: 5
            },
        ];
    }

    get dailyViews(): Observable<IDailyView[]> {

        return of(this._dailyViews);
    }

    addDailyView(dailyView: IDailyView): Observable<IDailyView[]> {

        dailyView.dailyViewId = uuidv4();
        this._dailyViews.push(dailyView);
        return of(this._dailyViews);
    }

    updateDailyView(dailyView: IDailyView): Observable<IDailyView> {

        const dailyViewIndex = this.getDailyViewIndex(dailyView.dailyViewId);
        this._dailyViews[dailyViewIndex] = dailyView;
        console.log(this._dailyViews);
        return of(this._dailyViews[dailyViewIndex]);
    }

    private getDailyViewIndex(dailyViewId: string): number {

        return this._dailyViews.findIndex(dailyView => dailyView.dailyViewId === dailyViewId);
    }
}
