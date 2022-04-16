import { Data } from '../../interfaces';
import { DataService } from './DataService';
import { data } from '../../data/data';

export class StaticDataService implements DataService {
    public getResume(username: string): Promise<Data> {
        return new Promise((resolve, reject) => resolve(data));
    }
}
