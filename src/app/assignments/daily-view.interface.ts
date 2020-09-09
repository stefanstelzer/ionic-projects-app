import { IProject } from '../projects/projects.interface';

export interface IDailyView {

    assignments?: [{assignmentId: string, bookedHours: number, project: IProject}] | any[];
    sum?:  number,
    date: string;
    dailyViewId: string;
    pauseInHours?: number;
    arrivalTime?: number;
    leaveTime?: number;
}
