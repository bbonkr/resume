import useSWR from 'swr';
import { Data } from '../../interfaces';
import Axios from 'axios';
import { ApiException } from '../../libs/Errors/ApiError';

export const useApi = () => {
    const endpoint = process.env.API ?? '';

    const { data, isValidating, error } = useSWR<Data>(
        'get-resume',
        (_) =>
            Axios.get<Data>(`${endpoint}`)
                .then((res) => res.data as Data)
                .catch((err) => {
                    let error: ApiException;
                    if (err.response?.data) {
                        error = err.response.data as ApiException;
                    } else {
                        error = new ApiException(500, 'unknown error occurred');
                    }
                    throw error;
                }),
        {
            errorRetryCount: 0,
            errorRetryInterval: 0,
            // fallback
            shouldRetryOnError: false,
            isPaused: () => !endpoint,
            loadingTimeout: 2000,
            refreshInterval: 0,
            revalidateOnFocus: false,
            // revalidateOnMount: false,
            revalidateIfStale: false,
        },
    );

    return {
        isLoading: isValidating,
        resume: data,
        error,
    };
};

export type UseApi = ReturnType<typeof useApi>;
