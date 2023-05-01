import { Data } from '../../interfaces';

export interface DataService {
    getResume(username: string): Promise<Data | undefined | null>;
}
