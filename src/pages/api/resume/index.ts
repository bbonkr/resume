import type { NextApiRequest, NextApiResponse } from 'next';
import { Data } from '../../../interfaces';
import { DataService } from '../../../libs/DataService';

const getResumeData = async (_: NextApiRequest, res: NextApiResponse<Data>) => {
    const expiration = 7 * 24 * 60 * 60;
    const username = process.env.USERNAME ?? '';

    const dataService = new DataService();
    const data = await dataService.getResume(username);

    if (process.env.NODE_ENV !== 'production') {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.setHeader('Cache-Control', `private, max-age=${expiration}`);
        res.setHeader('Access-Control-Allow-Origin', '*'); // Allow from anywhere
    }

    res.status(200).json(data);
};

export default getResumeData;
