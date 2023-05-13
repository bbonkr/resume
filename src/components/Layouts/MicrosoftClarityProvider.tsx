import * as React from 'react';

interface MicrosoftClarityProviderProps {
    projectId?: string;
}

export const MicrosoftClarityProvider = ({
    projectId,
    children,
}: React.PropsWithChildren<MicrosoftClarityProviderProps>) => {
    React.useEffect(() => {
        if (projectId) {
            import('clarity-js')
                .then((m) => {
                    m.clarity.start({ projectId: projectId });

                    console.info('⚡ Microsoft Clarity connected.');
                })
                .catch((err) => {
                    throw err;
                });
        }
    }, [projectId]);

    return <>{children}</>;
};
