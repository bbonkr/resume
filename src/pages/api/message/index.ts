import sgMail, { MailDataRequired } from '@sendgrid/mail';

import { SendMessageResponseModel } from '../../../interfaces';
import { ApiException } from '../../../libs/Errors/ApiError';

import type { NextApiRequest, NextApiResponse } from 'next';

const sendMessage = async (req: NextApiRequest, res: NextApiResponse<SendMessageResponseModel>) => {
    const sendGirdApiKey = process.env.SENDGRID_API_KEY ?? '';
    const sendGridEmail = process.env.SENDGRID_EMAIL ?? '';
    const sendGridSender = process.env.SENDGRID_SENDER ?? '';
    const { name, email, message } = req.body;

    try {
        if (req.method !== 'POST') {
            throw new ApiException(406, '메시지를 전송할 수 없습니다. [E101]');
        }

        if (!sendGirdApiKey || !sendGridEmail || !sendGridSender) {
            throw new ApiException(400, '메시지를 전송할 수 없습니다. [E101]');
        }

        if (!name || !email || !message) {
            throw new ApiException(400, '메시지를 전송할 수 없습니다. [E102]');
        }

        const sgMessage: MailDataRequired = {
            from: sendGridEmail,
            to: sendGridEmail,
            subject: `[RESUME] ${name} 님의 메시지`,
            html: `
            <h2>Resume web app에서 전송된 메시지입니다.</h2>
            <h3>보낸 사람</h3>
            <dl>
            <dt>${name}</dt>
            <dd>${email}</dd>
            </dl>
            <h3>메시지</h3>
            <pre>${message}</pre>`,
        };

        sgMail.setApiKey(sendGirdApiKey);
        const [response] = await sgMail.send(sgMessage);

        if (response.statusCode <= 200 && response.statusCode >= 300) {
            throw new ApiException(400, '메시지를 전송할 수 없습니다 [E103]');
        }

        res.status(200).json({
            status: 200,
            message: 'Your message has been sent.',
        });
    } catch (e) {
        if (e instanceof ApiException) {
            res.status(e.statusCode).json({
                status: e.statusCode,
                message: e.message,
            });
        } else {
            res.status(500).json({
                status: 500,
                message: '알수없는 예외가 발생했습니다',
            });
        }
    }
};

export default sendMessage;
