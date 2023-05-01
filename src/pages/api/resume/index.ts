import type { NextApiRequest, NextApiResponse } from 'next';
import { type Data } from '../../../interfaces';
import { StaticDataService } from '../../../libs/DataService';

const getResumeData = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.method === 'GET') {
        const expiration = 7 * 24 * 60 * 60;
        const username = process.env.USERNAME ?? '';

        const dataService = new StaticDataService();
        const data = await dataService.getResume(username);

        if (process.env.NODE_ENV !== 'production') {
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.setHeader('Cache-Control', `private, max-age=${expiration}`);
            res.setHeader('Access-Control-Allow-Origin', '*'); // Allow from anywhere
        }

        if (!data) {
            res.status(404);
        } else {
            res.status(200).json(data);
        }
    } else {
        res.status(406).end();
    }
};

export default getResumeData;
