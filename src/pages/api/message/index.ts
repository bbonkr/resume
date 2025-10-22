import sgMail, { MailDataRequired } from '@sendgrid/mail';
import axios from 'axios';

import { SendMessageResponseModel } from '../../../interfaces';
import { ApiException } from '../../../libs/Errors/ApiError';

import type { NextApiRequest, NextApiResponse } from 'next';

type MessageModel = {
    name: string;
    email: string;
    message: string;
};

const sendEmail = async (messageRequest: MessageModel): Promise<void> => {
    const sendGirdApiKey = process.env.SENDGRID_API_KEY ?? '';
    const sendGridEmail = process.env.SENDGRID_EMAIL ?? '';
    const sendGridSender = process.env.SENDGRID_SENDER ?? '';

    const { name, email, message } = messageRequest;

    if (!sendGirdApiKey || !sendGridEmail || !sendGridSender) {
        console.info('sendgrid 를 사용하지 않습니다.');
        return;
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

    if (response.statusCode >= 300) {
        throw new ApiException(400, '메시지를 전송할 수 없습니다 [E103]');
    }
};

const sendSlackMessage = async (messageRequest: MessageModel): Promise<void> => {
    const { name, email, message } = messageRequest;
    const slackWebhookUrl = process.env.SLACK_WEBHOOK ?? '';

    if (!slackWebhookUrl) {
        console.info('Slack webhook 을 사용하지 않습니다.');
        return;
    }
    const textMessage = `
From: **${name}** (**${email}**)
Message: 
${message}
`;

    const blocks = [
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `Message from:`,
            },
            fields: [
                {
                    type: 'mrkdwn',
                    text: `*${name}*`,
                },
                {
                    type: 'mrkdwn',
                    text: `${email}`,
                },
            ],
        },
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `Message:`,
            },
            fields: [
                {
                    type: 'mrkdwn',
                    text: `${message}`,
                },
            ],
        },
    ];

    const response = await axios.post(slackWebhookUrl, {
        text: blocks ? undefined : textMessage,
        mrkdwn: true,
        blocks,
    });

    if (response.status >= 300) {
        throw new ApiException(400, '메시지를 전송할 수 없습니다. [E201]');
    }
};

const sendMessage = async (req: NextApiRequest, res: NextApiResponse<SendMessageResponseModel>) => {
    try {
        if (req.method !== 'POST') {
            throw new ApiException(406, '메시지를 전송할 수 없습니다. [E101]');
        }
        const { name, email, message } = req.body;

        const messageRequest: MessageModel = { name, email, message };

        await Promise.allSettled([sendEmail(messageRequest), sendSlackMessage(messageRequest)]);

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
