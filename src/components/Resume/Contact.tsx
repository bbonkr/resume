import * as React from 'react';

import axios from 'axios';
import { useFormik } from 'formik';
import { InferType, object, string } from 'yup';

import { Data, SendMessageResponseModel } from '../../interfaces';

import { SnsList } from './SnsList';

interface ContactProps {
    data?: Data | null;
    title?: string;
    isLoading?: boolean;
}

const validationSchema = object({
    name: string().required('이름을 입력해 주세요'),
    email: string()
        .email('유효한 전자우편주소를 입력해 주세요')
        .required('전자우편주소를 입력해 주세요'),
    message: string().required('메시지를 입력해 주세요'),
});

type FormValues = InferType<typeof validationSchema>;

const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY;

export const Contact = ({ title, data, isLoading }: ContactProps) => {
    const [result, setResult] = React.useState<SendMessageResponseModel>();

    const { values, errors, touched, getFieldProps, isSubmitting, isValid, handleSubmit } =
        useFormik<Partial<FormValues>>({
            initialValues: {},
            validateOnMount: true,
            validationSchema: validationSchema,
            onSubmit: async (formValues, helper) => {
                try {
                    helper.setSubmitting(true);
                    const isVaild = await helper.validateForm(formValues);

                    if (isVaild) {
                        try {
                            const response = await axios.post<SendMessageResponseModel>(
                                `/api/message`,
                                formValues,
                            );

                            if (response.data?.status === 200) {
                                helper.resetForm();
                            }

                            setResult((_) => response.data);
                        } catch (e) {
                            setResult((_) => ({
                                status: 500,
                                message: `${e instanceof Error ? e.message : e}`,
                            }));
                        }
                    }
                } finally {
                    helper.setSubmitting(false);

                    if (clarityProjectId && typeof clarityProjectId === 'string') {
                        import('clarity-js')
                            .then((m) =>
                                m.clarity.event(
                                    'send_message',
                                    formValues?.name ?? 'Fail to recognize name',
                                ),
                            )
                            .catch((err) => {
                                console.warn('Could not send data to clarity', err);
                            });
                    }
                }
            },
        });

    React.useEffect(() => {
        if (result) {
            window.setTimeout(() => {
                setResult((_) => undefined);
            }, 5000);
        }
    }, [result]);

    return (
        <div className=" w-full flex flex-col justify-center items-start mb-9 border-b-2 border-slate-500 dark:border-slate-400 last:border-0">
            <div className="w-full flex flex-col justify-center items-center px-9 pb-9 ">
                <h2 className="font-semibold">{title}</h2>
            </div>

            <div className="w-full md:w-1/2 md:mx-auto flex flex-col justify-center items-center px-9 pb-9 ">
                <SnsList data={data?.me} isLoading={isLoading} />
            </div>

            <div className="w-full md:w-1/2 md:mx-auto flex flex-col justify-center items-center px-9 pb-9 ">
                <form className="w-full " role="form" onSubmit={handleSubmit}>
                    <div className="w-full mb-3">
                        <label>
                            <span>
                                <span className="font-normal">Name</span>
                                <span className="text-red-400 px-2 py-1 text-sm">
                                    {touched.name && errors.name ? errors.name : ' '}
                                </span>
                            </span>
                            <input
                                type="text"
                                className="w-full"
                                placeholder="Name"
                                required
                                {...getFieldProps('name')}
                                value={values.name ?? ''}
                                disabled={isLoading || isSubmitting}
                            />
                        </label>
                    </div>

                    <div className="w-full mb-3">
                        <label>
                            <span>
                                <span className="font-normal">Email</span>
                                <span className="text-red-400 px-2 py-1 text-sm">
                                    {touched.email && errors.email ? errors.email : ' '}
                                </span>
                            </span>
                            <input
                                type="email"
                                className="w-full"
                                placeholder="Email"
                                required
                                {...getFieldProps('email')}
                                value={values.email ?? ''}
                                disabled={isLoading || isSubmitting}
                            />
                        </label>
                    </div>

                    <div className="w-full mb-3">
                        <label>
                            <span>
                                <span className="font-normal">Message</span>
                                <span className="text-red-400 px-2 py-1 text-sm">
                                    {touched.message && errors.message ? errors.message : ' '}
                                </span>
                            </span>
                            <textarea
                                className="w-full"
                                placeholder="Message"
                                rows={8}
                                {...getFieldProps('message')}
                                value={values.message ?? ''}
                                disabled={isLoading || isSubmitting}
                            />
                        </label>
                    </div>

                    <div className="w-full mb-3 flex flex-col justify-center items-center">
                        {result ? (
                            <React.Fragment>
                                <p
                                    className={`${
                                        result?.status === 200 ? 'text-green-500' : 'text-red-500'
                                    }`}
                                >
                                    {result?.message}
                                </p>
                                <p>메시지를 확인하고 연락드리겠습니다. 감사합니다.</p>
                                <p>Thank you. I will check the message and contact you</p>
                            </React.Fragment>
                        ) : (
                            <button
                                type="submit"
                                className="px-6 py-3 text-slate-200 bg-blue-500 ring-2 ring-blue-100 rounded-lg hover:bg-blue-600 active:bg-blue-800 active:ring-blue-300 disabled:bg-slate-400 disabled:text-slate-300 disabled:ring-0"
                                disabled={isSubmitting || !isValid || isLoading}
                            >
                                {isLoading && 'Please wait, now loading'}
                                {isSubmitting && 'Please wait until processing is completed'}
                                {!isValid && 'Please check your input'}
                                {!isSubmitting && isValid && !isLoading && 'Submit'}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};
