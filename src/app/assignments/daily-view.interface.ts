import { IProject } from '../projects/projects.interface';

export interface IDailyView {

    assignments?: [{bookedHours: number, project: IProject}] | any[];
    sum?:  number,
    date: Date;
    dailyViewId?: string;
    pauseInHours?: number;
    arrivalTime?: number;
    leaveTime?: number;
}
