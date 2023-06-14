import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiResponseModel } from '../../../interfaces/ApiResponseModel';

const revalidateHanlder = async (req: NextApiRequest, res: NextApiResponse<ApiResponseModel>) => {
    const { method, query } = req;

    if (process.env.NEXT_PUBLIC_ENV !== 'dev') {
        if (method !== 'POST') {
            return res.status(400).json({
                status: 400,
                message: 'Invalid HTTP method. Only POST method is allowed.',
            });
        }
    }

    const { secret } = query;
    const secretRevalidateToken = process.env.SECRET_REVALIDATE_TOKEN;

    if (typeof secret !== 'string' || secret !== secretRevalidateToken) {
        return res.status(401).json({ status: 401, message: 'Invalid token' });
    }

    try {
        await res.revalidate('/');

        return res.status(202).json({ status: 202, message: 'Revalidated' });
    } catch (err) {
        return res.status(500).json({ status: 500, message: 'Error while revalidating' });
    }
};

export default revalidateHanlder;
