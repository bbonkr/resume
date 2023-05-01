import { Data } from '../../interfaces';
import { DataService } from './DataService';
import { data } from '../../data/data';

export class StaticDataService implements DataService {
    public getResume(username: string): Promise<Data | undefined | null> {
        return new Promise((resolve, reject) => {
            if (data.site) {
                data.site.sourceType = 'static';
            }
            resolve(data);
        });
    }
}
