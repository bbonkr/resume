import * as React from 'react';

interface MicrosoftClarityProviderProps {
    projectId?: string;
    stage?: string;
}

export const MicrosoftClarityProvider = ({
    projectId,
    stage,
    children,
}: React.PropsWithChildren<MicrosoftClarityProviderProps>) => {
    React.useEffect(() => {
        if (!projectId) {
            import('clarity-js')
                .then((m) => {
                    m.clarity.set('env', [stage ?? 'dev', window.location.hostname]);
                })
                .catch((err) => {
                    throw err;
                });
        }
    }, [stage, projectId]);

    if (!projectId) {
        return <React.Fragment>{children}</React.Fragment>;
    }

    return <React.Fragment>{children}</React.Fragment>;
};
